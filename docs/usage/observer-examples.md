---
sidebar_position: 5
---

# Example Observers

Before diving into specific observers, please read the [Observer Pattern Introduction](observer-intro.md) to understand how observers work in Noorg.

## Core Observers

### 1. Timestamp Observer (Rust)
`timestamp.rs` - Manages note timestamps
- **Purpose**: Tracks creation and modification times
- **Functionality**:
  - Adds `created_at` on new note creation
  - Updates `updated_at` on every modification
  - Preserves original creation date
- **Metadata Example**:

```yaml
created_at: 2024-03-14 15:23:45 +0100
updated_at: 2024-03-14 16:45:12.123456 +0100
```

Example Code
```rust
use crate::event::{NoteEvent, NoteObserver, ObserverResult};
use chrono::Local;
use std::any::Any;
use std::collections::HashMap;
use std::future::Future;
use std::pin::Pin;
use tracing::{debug, info};

pub struct TimestampObserver;

impl NoteObserver for TimestampObserver {
    fn on_event_boxed(
        &self,
        event: NoteEvent,
    ) -> Pin<Box<dyn Future<Output = std::io::Result<Option<ObserverResult>>> + Send + '_>> {
        Box::pin(async move {
            let mut metadata = HashMap::new();
            match event {
                NoteEvent::Created {
                    title, frontmatter, ..
                } => {
                    debug!("Processing creation timestamp for '{}'", title);

                    if !frontmatter.contains_key("created_at") {
                        let created_at = Local::now().format("%Y-%m-%d %H:%M:%S %z").to_string();
                        debug!("Setting initial created_at: {}", created_at);
                        metadata.insert("created_at".to_string(), created_at);
                    }

                    let updated_at = Local::now().format("%Y-%m-%d %H:%M:%S.%f %z").to_string();
                    debug!("Setting updated_at: {}", updated_at);
                    metadata.insert("updated_at".to_string(), updated_at);

                    info!("✨ Timestamps initialized for new note '{}'", title);
                }
                NoteEvent::Updated {
                    title, frontmatter, ..
                }
                | NoteEvent::Synced {
                    title, frontmatter, ..
                } => {
                    debug!("Processing update timestamp for '{}'", title);

                    if let Some(created) = frontmatter.get("created_at") {
                        debug!("Preserving existing created_at: {}", created);
                        metadata.insert("created_at".to_string(), created.clone());
                    }

                    let updated_at = Local::now().format("%Y-%m-%d %H:%M:%S.%f %z").to_string();
                    debug!("Setting updated_at: {}", updated_at);
                    metadata.insert("updated_at".to_string(), updated_at);

                    info!("✨ Updated timestamp for '{}'", title);
                }
            }

            Ok(Some(ObserverResult {
                metadata: Some(metadata),
                content: None,
            }))
        })
    }

    fn name(&self) -> String {
        "timestamp".to_string()
    }

    fn as_any(&self) -> &dyn Any {
        self
    }

    fn priority(&self) -> i32 {
        0 // Run after metadata generation but before storage
    }
}
```

### 2. Tabble of Contents Observer (Rust)
`toc.rs` - Generates a table of contents

- **Purpose**: Creates a table of contents based on headings
- **Features**:
    - Parses Markdown headlines
    - Creates anchor links
    - Updates on content changes
    - skips first H1 title
- **Example Output**:

```markdown
## Contents

* Introduction
  * Getting Started
  * Prerequisites
```
-> See [toc.rs](https://github.com/realjockel/noorg/blob/main/src/observers/toc.rs) for the full implementation.

### 3. Tag Index Observer (Rust)
`tag_index.rs` - Manages a central tag index
- **Purpose**: Tracks all tags and associated notes
- **Features:**
    - Extracts tags from frontmatter
    - Generates `_tag_index.md`
    - Creates relative links
    - Updates on content changes
- **Example Output**:
```markdown
## rust
- [Project A](./Project A.md)
- [Setup Guide](./Setup Guide.md)

## python
- [Script Notes](./Script Notes.md)
```
-> See [tag_index.rs](https://github.com/realjockel/noorg/blob/main/src/observers/tag_index.rs) for the full implementation.


### 4. Content Metrics Observer (Python)
`content_metrics_generator.py` - Calculates content metrics

- **Purpose**: Generates content metrics for notes
- Metrics:
    - Word count
    - Character count
    - Link count
    - Header counting
    - Top words
- **Example Output**:
```yaml
word_count: "440"
char_count: "2345"
sentence_count: "15"
avg_words_per_sentence: "29.3"
link_count: "5"
header_count: "3"
```
-> See [content_metrics_generator.py](https://github.com/realjockel/noorg/blob/main/resources/default_scripts/python/content_metrics_generator.py) for the full implementation.

### 5. Kanban Board Observer (Python)
`kanban_board.py` - Task management system

![kanban board](../img/kanban.gif)
- **Purpose**: Creates interactive kanban board from tasks
- **Features**:
  - Extracts tasks with #todo #doing #done inline tags
  - Tracks states: planned, todo, doing, done
  - Maintains task context
  - Generates `_kanban.md`
  - After a tag like #doing you can add a description in () like this `#todo(working on feature X)`

- **Example Output**:


| 📅 Planned | ✅ Todo | 🏃 Doing | ✨ Done |
|------------|---------|----------|---------|
| | | | |
|   | Implements user authentication📎 [link to note](../intro.md) |   |   |
|   | update the github repo📎 [link to note](../intro.md) |   |   |
|   |   | Refactors database queries📎 [link to note](../intro.md)   |
|   |   |   | Updates documentation📎 [link to note](../intro.md)|

-> See [kanban_board.py](https://github.com/realjockel/noorg/blob/main/resources/default_scripts/python/kanban_board.py) for the full implementation.


### 6. Time Tracker Observer
`time_tracker.py` - Time management and tracking

![time tracker](../img/time_tracker.gif)
- **Purpose**: Tracks time spent on different topics/tasks
- **Features**:
  - Tracks work blocks and breaks
  - Calculates daily/weekly hours
  - Configurable work hours/days
  - Vacation tracking
- **Configuration**:
```yaml
expected_hours_per_week: 40
workdays: [Monday, Tuesday, Wednesday, Thursday, Friday]
vacation_days_per_year: 30
```
- **Example Output**:

```

# ⏱️ Time Tracker

## Configuration
Expected Hours per Week: 20.0
Workdays: Monday, Tuesday, Wednesday, Thursday, Friday
Vacation Days per Year: 30

### Overall Summary
Total hours worked: 116.50h
Expected hours: 320.00h
Balance: -203.50h

Status: ⚠️ Behind schedule

### Weekly Summary

| Week | Dates | Hours Worked | Expected Hours | Balance | Cumulative Balance |
|------|-------|--------------|----------------|---------|-------------------|
| 2024-W49 | 2024-12-02 to 2024-12-08 | 39.00h | 20.00h | +19.00h | +19.00h |
| 2024-W13 | 2024-03-25 to 2024-03-31 | 29.00h | 20.00h | +9.00h | +28.00h |
| 2024-W12 | 2024-03-18 to 2024-03-24 | 0.00h | 20.00h | -20.00h | +8.00h |
| 2024-W09 | 2024-02-26 to 2024-03-03 | 18.50h | 20.00h | -1.50h | +6.50h |
| 2024-W08 | 2024-02-19 to 2024-02-25 | 6.00h | 20.00h | -14.00h | -7.50h |
| 2024-W05 | 2024-01-29 to 2024-02-04 | 12.00h | 20.00h | -8.00h | -15.50h |
| 2024-W04 | 2024-01-22 to 2024-01-28 | 12.00h | 20.00h | -8.00h | -23.50h |

### Monthly Summary

#### 2024-01
Hours worked: 24.00h
Expected hours: 80.00h
Balance: -56.00h
Vacation days: 1
Sick days: 0

#### 2024-02
Hours worked: 24.50h
Expected hours: 80.00h
Balance: -55.50h
Vacation days: 0
Sick days: 1

#### 2024-03
Hours worked: 29.00h
Expected hours: 80.00h
Balance: -51.00h
Vacation days: 1
Sick days: 1

#### 2024-12
Hours worked: 39.00h
Expected hours: 80.00h
Balance: -41.00h
Vacation days: 0
Sick days: 0


## Time Entries
| Date | Type | Work Times | Break Times | Notes |
|------|------|------------|-------------|--------|
| 2024-12-05 | workday | 06:00-12:00,13:00-20:00 | 12:00-13:00 | Regular work day |
| 2024-12-04 | workday | 06:00-12:00,13:00-20:00 | 12:00-13:00 | Regular work day |
| 2024-12-03 | workday | 06:00-12:00,13:00-23:00 | 12:00-13:00 | Regular work day |
| 2024-03-29 | workday | 09:00-12:00,13:00-20:00 | 12:00-13:00 | Regular work day |
| 2024-03-28 | workday | 09:00-12:00,13:00-19:00 | 12:00-13:00 | Regular work day |
| 2024-03-27 | workday | 09:30-12:00,13:00-17:30 | 12:00-13:00 | Team meeting |
| 2024-03-26 | vacation | - | - | Spring break |
| 2024-03-25 | workday | 08:30-12:00,13:00-16:30 | 12:00-13:00 | Project planning |
| 2024-03-22 | sick | - | - | Doctor's appointment |
| 2024-02-29 | workday | 09:00-12:00,13:00-17:30 | 12:00-13:00 | Sprint review |
| 2024-02-28 | workday | 09:00-12:00,13:00-17:00 | 12:00-13:00 | Regular work day |
| 2024-02-27 | workday | 08:30-12:00,13:00-16:30 | 12:00-13:00 | Team workshop |
| 2024-02-26 | sick | - | - | Flu |
| 2024-02-23 | workday | 09:30-12:00,13:00-17:30 | 12:00-13:00 | Client meeting |
| 2024-01-31 | workday | 09:00-12:00,13:00-17:00 | 12:00-13:00 | Month-end review |
| 2024-01-30 | workday | 09:00-12:00,13:00-17:00 | 12:00-13:00 | Regular work day |
| 2024-01-29 | vacation | - | - | Winter break |
| 2024-01-26 | workday | 09:30-12:00,13:00-17:30 | 12:00-13:00 | Planning session |
| 2024-01-25 | workday | 08:30-12:00,13:00-16:30 | 12:00-13:00 | Regular work day |
<!-- Format: Work Times: 09:00-12:00,13:00-17:00 | Break Times: 12:00-13:00 -->
```

-> See [time_tracker.py](https://github.com/realjockel/noorg/blob/main/resources/default_scripts/python/time_tracker.py) for the full implementation.

### 7. Inline Tags Observer (Python)
`inline_tags.py` - Extracts inline tags from notes
- **Purpose**: Extracts inline tags from notes and add them to the frontmatter.
- **Features**:
  - Extracts tags from inline text
  - Excludes heading anchors
  - Adds tags to frontmatter
  - Updates on content changes
- **Example Output**: `#project`

-> See [inline_tags.py](https://github.com/realjockel/noorg/blob/main/resources/default_scripts/python/inline_tags.py) for the full implementation.
