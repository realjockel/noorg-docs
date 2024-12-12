"use strict";(self.webpackChunknoorg_docs=self.webpackChunknoorg_docs||[]).push([[360],{7156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"usage/observer-intro","title":"Observer Pattern in Noorg","description":"The observer pattern in Noorg provides an extensible system for processing notes through multiple independent observers written in Rust, Python, or Lua.","source":"@site/docs/usage/observer-intro.md","sourceDirName":"usage","slug":"/usage/observer-intro","permalink":"/docs/usage/observer-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/observer-intro.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Create a Note","permalink":"/docs/usage/create-a-note"},"next":{"title":"Example Observers","permalink":"/docs/usage/observer-examples"}}');var t=r(4848),o=r(8453);const i={sidebar_position:4},d="Observer Pattern in Noorg",l={},c=[{value:"Core Components",id:"core-components",level:2},{value:"1. Event System (<code>event.rs</code>)",id:"1-event-system-eventrs",level:3},{value:"2. Registry (<code>observer_registry.rs</code>)",id:"2-registry-observer_registryrs",level:3},{value:"Observer Types",id:"observer-types",level:2},{value:"1. Rust Observers",id:"1-rust-observers",level:3},{value:"2. Python Observers",id:"2-python-observers",level:3},{value:"3. Lua Observers",id:"3-lua-observers",level:3},{value:"Loading Process (<code>script_loader.rs</code>)",id:"loading-process-script_loaderrs",level:2},{value:"Execution flow",id:"execution-flow",level:2},{value:"Priority and Order",id:"priority-and-order",level:3},{value:"Implementation Requirements",id:"implementation-requirements",level:2},{value:"Rust Observer",id:"rust-observer",level:3},{value:"Python Observer",id:"python-observer",level:3},{value:"Lua Observer",id:"lua-observer",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"observer-pattern-in-noorg",children:"Observer Pattern in Noorg"})}),"\n",(0,t.jsx)(n.p,{children:"The observer pattern in Noorg provides an extensible system for processing notes through multiple independent observers written in Rust, Python, or Lua."}),"\n",(0,t.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,t.jsxs)(n.h3,{id:"1-event-system-eventrs",children:["1. Event System (",(0,t.jsx)(n.code,{children:"event.rs"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["The event system defines the ",(0,t.jsx)(n.code,{children:"NoteEvent"})," enum and ",(0,t.jsx)(n.code,{children:"ObserverResult"})," struct. The ",(0,t.jsx)(n.code,{children:"NoteEvent"})," enum represents the different types of events that can occur during note processing. The ",(0,t.jsx)(n.code,{children:"ObserverResult"})," struct is used to return the processed note content and metadata from an observer."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub enum NoteEvent {\n    Created { title, content, file_path, frontmatter },\n    Updated { title, content, file_path, frontmatter },\n    Synced { title, content, file_path, frontmatter }\n}\n\npub struct ObserverResult {\n    pub metadata: Option<HashMap<String, String>>,\n    pub content: Option<String>\n}\n\npub trait NoteObserver: Send + Sync + 'static {\n    fn on_event_boxed(&self, event: NoteEvent) \n        -> Pin<Box<dyn Future<Output = io::Result<Option<ObserverResult>>>>>;\n    fn name(&self) -> String;\n    fn priority(&self) -> i32 { 0 }\n    fn as_any(&self) -> &dyn Any;\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"2-registry-observer_registryrs",children:["2. Registry (",(0,t.jsx)(n.code,{children:"observer_registry.rs"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["The observer registry maintains a list of observers and provides methods to add, remove, and run observers on notes. The registry is implemented as a singleton using the ",(0,t.jsx)(n.code,{children:"lazy_static"})," crate."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct ObserverRegistry {\n    observers: RwLock<Vec<Arc<Box<dyn NoteObserver>>>>\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"observer-types",children:"Observer Types"}),"\n",(0,t.jsx)(n.h3,{id:"1-rust-observers",children:"1. Rust Observers"}),"\n",(0,t.jsxs)(n.p,{children:["Rust observers are implemented as structs that implement the ",(0,t.jsx)(n.code,{children:"NoteObserver"})," trait. Observers can be added to the registry using the ",(0,t.jsx)(n.code,{children:"add_observer"})," method."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implement the ",(0,t.jsx)(n.code,{children:"NoteObserver"})," trait for a new observer."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the observer to the registry using the ",(0,t.jsx)(n.code,{children:"add_observer"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"Have direct access to Rust types and system"}),"\n",(0,t.jsx)(n.li,{children:"Can modify note content and metadata directly"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl NoteObserver for MyRustObserver {\n    fn on_event_boxed(&self, event: NoteEvent) -> Pin<Box<dyn Future<...>>> {\n        // Process event\n        // Return ObserverResult\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-python-observers",children:"2. Python Observers"}),"\n",(0,t.jsxs)(n.p,{children:["Python observers are implemented as standalone Python scripts that are executed by the Python interpreter. The ",(0,t.jsx)(n.code,{children:"python_executor"})," module provides a safe execution environment for Python scripts."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Must implement `process_event(event_json : str) function"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example (content_metrics_generator.py):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def process_event(event_json):\n    try:\n        event = json.loads(event_json)\n        log_info("\ud83d\udcca Processing content metrics")\n        \n        if isinstance(event, dict):\n            event_type = event.get("Created") or event.get("Updated") or event.get("Synced")\n            if event_type and "content" in event_type:\n                title = event_type.get("title", "unknown")\n                log_debug("Analyzing content for note: {}", title)\n                \n                metrics = calculate_metrics(event_type["content"])\n                log_info("\u2728 Generated metrics for \'{}\' - {} words, {} sentences", \n                        title, metrics["word_count"], metrics["sentence_count"])\n                \n                # Wrap metrics in the expected metadata structure\n                result = {\n                    "metadata": metrics,\n                    "content": None\n                }\n                \n                return json.dumps(result)\n        \n        log_debug("No suitable content found for metrics calculation")\n        return None\n            \n    except Exception as e:\n        log_error("Failed to process content metrics: {}", str(e))\n        return None \n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-lua-observers",children:"3. Lua Observers"}),"\n",(0,t.jsxs)(n.p,{children:["Lua observers are implemented as Lua scripts that are executed by the Lua interpreter. The ",(0,t.jsx)(n.code,{children:"lua_executor"})," module provides a safe execution environment for Lua scripts."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Must implement on_event(event_json)"}),"\n",(0,t.jsx)(n.li,{children:"Similar to Python works with JSON"}),"\n",(0,t.jsx)(n.li,{children:"Return format matches Python"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function on_event(event_json)\n    local event = json.decode(event_json)\n    -- Process content\n    return json.encode({\n        metadata = {...},\n        content = new_content\n    })\nend\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"loading-process-script_loaderrs",children:["Loading Process (",(0,t.jsx)(n.code,{children:"script_loader.rs"}),")"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Script Discovery: The loader scans the script directory for observer scripts and loads them into memory."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn load_observers(&self) -> io::Result<Vec<Box<dyn NoteObserver>>> {\n    // Load Rust observers\n    for observer_name in enabled_observers {\n        observers.push(create_observer(observer_name, settings));\n    }\n    \n    // Load Lua scripts from lua/\n    for entry in fs::read_dir(lua_dir)? {\n        observers.push(Box::new(LuaObserver::new(&path)?));\n    }\n    \n    // Load Python scripts from python/\n    for entry in fs::read_dir(py_dir)? {\n        observers.push(Box::new(PythonObserver::new(&path)?));\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Environment Setup"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rust: Observers are loaded as Rust types and can directly interact with the system."}),"\n",(0,t.jsx)(n.li,{children:"Python: Set up Python path and logging utilities"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"execution-flow",children:"Execution flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Note Changes"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// In NoteManager (note.rs)\npub async fn sync_single_note(&self, title: &str) -> io::Result<()> {\n    let event = NoteEvent::Synced { ... };\n    \n    for observer in active_observers {\n        match observer.on_event_boxed(event.clone()).await {\n            Ok(Some(result)) => {\n                // Update metadata and/or content\n            }\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Observer Processing"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each observer receives event"}),"\n",(0,t.jsxs)(n.li,{children:["Process event and return ",(0,t.jsx)(n.code,{children:"ObserverResult"})]}),"\n",(0,t.jsx)(n.li,{children:"Can modify content/metedata"}),"\n",(0,t.jsx)(n.li,{children:"Changes merged back into note"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"priority-and-order",children:"Priority and Order"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Regular observers execute first"}),"\n",(0,t.jsx)(n.li,{children:"Tag index observer executes next"}),"\n",(0,t.jsx)(n.li,{children:"SQLite observer executes last"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Within each group, priority() determines order"}),"\n",(0,t.jsx)(n.h2,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,t.jsx)(n.h3,{id:"rust-observer",children:"Rust Observer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl NoteObserver for MyObserver {\n    fn on_event_boxed(&self, event: NoteEvent);\n    fn name(&self) -> String;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"python-observer",children:"Python Observer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def process_event(event_json: str) -> str:\n    return json.dumps({"metadata": {}, "content": None})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"lua-observer",children:"Lua Observer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function on_event(event_json)\n    return json.encode({metadata = {}, content = nil})\nend\n"})}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["View ",(0,t.jsx)(n.code,{children:"script_loader.rs"})," for observer loading logic (Lua, Python)"]}),"\n",(0,t.jsxs)(n.li,{children:["Examples in ",(0,t.jsx)(n.code,{children:"resources/default_scripts"})]}),"\n",(0,t.jsxs)(n.li,{children:["View ",(0,t.jsx)(n.code,{children:"observer_registry.rs"})," for observer management"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event.rs"})," for event definitions"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"note.rs"})," for note processing logic"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);