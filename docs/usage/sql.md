---
sidebar_position: 5
---

# Dynamic Views with SQL

![SQL Executor](../img/sql.gif)

Noorg's SQL executor enables dynamic views of your notes by storing metadata in SQLite and allowing SQL queries embedded in your notes.

## Database Schema

### Tables
1. **notes**
```sql
CREATE TABLE notes (
    id INTEGER PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    path TEXT NOT NULL
)
```

2. **frontmatter**

```sql
CREATE TABLE frontmatter (
    file_id INTEGER,
    key TEXT,
    value TEXT,
    PRIMARY KEY (file_id, key),
    FOREIGN KEY (file_id) REFERENCES notes(id)
)
```

## Query Syntax

Add SQL queries to your notes using code blocks:

```sql
SELECT n.id, n.title, n.path
FROM notes n 
JOIN frontmatter f ON n.id = f.file_id 
WHERE f.key = 'tags' AND f.value LIKE '%project%'
```

Results appear as Markdown tables:

<!-- BEGIN SQL -->
| id | title | path |
|---|---|---|
| 1 | Project Notes | [Project Notes](sql.md) |
<!-- END SQL -->

## Query Examples

### 1. Find Notes by Tag

```sql
SELECT n.id, n.title, n.path
FROM notes n 
JOIN frontmatter f ON n.id = f.file_id 
WHERE f.key = 'tags' AND f.value LIKE '%project%'
```
### 2. Filter by Metadata Value

```sql
SELECT n.id, n.title, n.path
FROM notes n
JOIN frontmatter f ON n.id = f.file_id
WHERE f.key = 'link_count' 
AND CAST(f.value AS INTEGER) > 5
```

### 3. Complex Queries with Multiple Joins

```sql
SELECT 
    n.title,
    n.path,
    f1.value as updated_at,
    f2.value as word_count,
    f3.value as tags
FROM notes n
JOIN frontmatter f1 ON n.id = f1.file_id AND f1.key = 'updated_at'
JOIN frontmatter f2 ON n.id = f2.file_id AND f2.key = 'word_count'
JOIN frontmatter f3 ON n.id = f3.file_id AND f3.key = 'tags'
WHERE f1.value LIKE '2024-12-06%'
```

## How it works

1. **Storage**:
    - Each note's metadata is stored in the `frontmatter` table.
    - Note `paths` and `titles` are stored in the `notes` table
    - Key-value pairs from frontmatter become rows in `frontmatter`
2. **Processing**:
    - SQL blocks are detected in note content
    - Queries are executed against the SQLite database
    - Results are formatted as Markdown tables and inserted into the note
    - Original content is replaced with updated results
3. **Auto-Updates**:
    - Results are updated automatically when the note is processed
    - Queries re-run on each save
    - Tables are refreshed with the latest data

## Common Metadata Fields
- `word_count`: Number of words
- `char_count`: Character count
- `link_count`: Number of links
- `tags`: Note tags
- `updated_at`: Last modification time
- `created_at`: Creation timestamp