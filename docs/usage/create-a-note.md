---
sidebar_position: 3
---

# Create a Note


There are multiple ways to create notes in Noorg. Choose the method that best fits your workflow.

## System Tray Application

1. Click the Noorg icon in your system tray
2. Select "Create Note"
3. Enter the note title
4. Enter any frontmatter fields (optional)

## Command Line Interface

Use the `note_cli add` command with various options:

```bash
# Basic note creation
noorg note_cli add --title "My Note" --body "Content"

# Add frontmatter fields
noorg note_cli add --title "My Note" -f "priority:high" -f "project:X"

# Open in default editor (without --body)
noorg note_cli add --title "My Note" -f "tags:rust,cli"
```
**Basic Note Creation** 

![Create a Note](../img/create_a_note.gif)

**With Default Editor**

![Create a Note with Default Editor](../img/create_a_note_editor.gif)
### Command Options
- --title or -t: Note title (required)
- --body or -b: Note content (optional)
- --frontmatter or -f: Add frontmatter fields (optional, multiple allowed)


## Frontmatter Fields
- `tags` : Comma-separated list of tags
- `created_at` : Automatically added timestamp
- `skip_observers` : List of observers to skip for this note
- `Custom fields`: Add any key-value pairs

## Note Processing

*After creation*:

1. Note is saved to your configured directory
2. Observers process the note (unless skipped)
3. Content and metadata are updated accordingly
4. Changes are saved automatically

## Editor Integration
Set your preferred editor for CLI note creation:

```bash
export EDITOR=nvim  # or vim, code, etc
```
Add this to your shell profile to persist the setting. (e.g., `~/.bashrc`, `~/.zshrc`)
