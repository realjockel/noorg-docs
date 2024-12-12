---
sidebar_position: 4
---

# Observer Pattern in Noorg

The observer pattern in Noorg provides an extensible system for processing notes through multiple independent observers written in Rust, Python, or Lua.

## Core Components

### 1. Event System (`event.rs`)

The event system defines the `NoteEvent` enum and `ObserverResult` struct. The `NoteEvent` enum represents the different types of events that can occur during note processing. The `ObserverResult` struct is used to return the processed note content and metadata from an observer.
```rust
pub enum NoteEvent {
    Created { title, content, file_path, frontmatter },
    Updated { title, content, file_path, frontmatter },
    Synced { title, content, file_path, frontmatter }
}

pub struct ObserverResult {
    pub metadata: Option<HashMap<String, String>>,
    pub content: Option<String>
}

pub trait NoteObserver: Send + Sync + 'static {
    fn on_event_boxed(&self, event: NoteEvent) 
        -> Pin<Box<dyn Future<Output = io::Result<Option<ObserverResult>>>>>;
    fn name(&self) -> String;
    fn priority(&self) -> i32 { 0 }
    fn as_any(&self) -> &dyn Any;
}
```

### 2. Registry (`observer_registry.rs`)
The observer registry maintains a list of observers and provides methods to add, remove, and run observers on notes. The registry is implemented as a singleton using the `lazy_static` crate.

```rust
pub struct ObserverRegistry {
    observers: RwLock<Vec<Arc<Box<dyn NoteObserver>>>>
}
``` 
## Observer Types

### 1. Rust Observers
Rust observers are implemented as structs that implement the `NoteObserver` trait. Observers can be added to the registry using the `add_observer` method.

- Implement the `NoteObserver` trait for a new observer.
- Add the observer to the registry using the `add_observer` method.
- Have direct access to Rust types and system
- Can modify note content and metadata directly

```rust
impl NoteObserver for MyRustObserver {
    fn on_event_boxed(&self, event: NoteEvent) -> Pin<Box<dyn Future<...>>> {
        // Process event
        // Return ObserverResult
    }
}
```


### 2. Python Observers
Python observers are implemented as standalone Python scripts that are executed by the Python interpreter. The `python_executor` module provides a safe execution environment for Python scripts.

- Must implement `process_event(event_json : str) function

Example (content_metrics_generator.py):
```python
def process_event(event_json):
    try:
        event = json.loads(event_json)
        log_info("📊 Processing content metrics")
        
        if isinstance(event, dict):
            event_type = event.get("Created") or event.get("Updated") or event.get("Synced")
            if event_type and "content" in event_type:
                title = event_type.get("title", "unknown")
                log_debug("Analyzing content for note: {}", title)
                
                metrics = calculate_metrics(event_type["content"])
                log_info("✨ Generated metrics for '{}' - {} words, {} sentences", 
                        title, metrics["word_count"], metrics["sentence_count"])
                
                # Wrap metrics in the expected metadata structure
                result = {
                    "metadata": metrics,
                    "content": None
                }
                
                return json.dumps(result)
        
        log_debug("No suitable content found for metrics calculation")
        return None
            
    except Exception as e:
        log_error("Failed to process content metrics: {}", str(e))
        return None 
```

### 3. Lua Observers
Lua observers are implemented as Lua scripts that are executed by the Lua interpreter. The `lua_executor` module provides a safe execution environment for Lua scripts.

- Must implement on_event(event_json)
- Similar to Python works with JSON
- Return format matches Python

```lua
function on_event(event_json)
    local event = json.decode(event_json)
    -- Process content
    return json.encode({
        metadata = {...},
        content = new_content
    })
end
``` 

## Loading Process (`script_loader.rs`)

1. Script Discovery: The loader scans the script directory for observer scripts and loads them into memory.

```rust
pub fn load_observers(&self) -> io::Result<Vec<Box<dyn NoteObserver>>> {
    // Load Rust observers
    for observer_name in enabled_observers {
        observers.push(create_observer(observer_name, settings));
    }
    
    // Load Lua scripts from lua/
    for entry in fs::read_dir(lua_dir)? {
        observers.push(Box::new(LuaObserver::new(&path)?));
    }
    
    // Load Python scripts from python/
    for entry in fs::read_dir(py_dir)? {
        observers.push(Box::new(PythonObserver::new(&path)?));
    }
}
``` 

2. Environment Setup
- Rust: Observers are loaded as Rust types and can directly interact with the system.
- Python: Set up Python path and logging utilities


## Execution flow

1. Note Changes

```rust
// In NoteManager (note.rs)
pub async fn sync_single_note(&self, title: &str) -> io::Result<()> {
    let event = NoteEvent::Synced { ... };
    
    for observer in active_observers {
        match observer.on_event_boxed(event.clone()).await {
            Ok(Some(result)) => {
                // Update metadata and/or content
            }
        }
    }
}
```

2. Observer Processing

- Each observer receives event
- Process event and return `ObserverResult`
- Can modify content/metedata
- Changes merged back into note


### Priority and Order
- Regular observers execute first
- Tag index observer executes next
- SQLite observer executes last

Within each group, priority() determines order

## Implementation Requirements

### Rust Observer
```rust
impl NoteObserver for MyObserver {
    fn on_event_boxed(&self, event: NoteEvent);
    fn name(&self) -> String;
}
```

### Python Observer
```python
def process_event(event_json: str) -> str:
    return json.dumps({"metadata": {}, "content": None})
```

### Lua Observer
```lua
function on_event(event_json)
    return json.encode({metadata = {}, content = nil})
end
```

## Additional Resources
- View `script_loader.rs` for observer loading logic (Lua, Python)
- Examples in `resources/default_scripts`
- View `observer_registry.rs` for observer management
- `event.rs` for event definitions
- `note.rs` for note processing logic

