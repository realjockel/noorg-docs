---
sidebar_position: 1
---

# Noorg Watcher

![Noorg Watcher](../img/noorg-watcher.gif)

The Noorg Watcher is a core component that continuously monitors your notes directory for changes. It automatically processes modified notes through configured observers without requiring manual intervention.

## How It Works

1. **Directory Monitoring**: The watcher continuously observes your configured notes directory for:
   - File modifications
   - New file creation
   - Changes to existing files

2. **Smart Change Detection**:
   - Uses file hashing to detect actual content changes
   - Prevents unnecessary processing of unchanged files
   - Implements debouncing to avoid multiple processing of rapid changes

## Starting the Watcher

You can start the watcher in two ways:

1. **Via System Tray**
   - Click the Noorg icon in your system tray
   - Toggle "Watch Notes" to start/stop watching

2. **Via CLI**
```bash
noorg note_cli watch
