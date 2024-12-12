---
sidebar_position: 2
---

# Skip Observers

The `skip_observers` frontmatter field allows you to control which observers process your notes on a per-file basis.

## Usage

Add `skip_observers` to your note's frontmatter:

```yaml
---
skip_observers: 'toc' , 'similar-notes'
---
```

## Skip All Observers
The `skip_observers` field also accepts the value `all` to skip all observers:

```yaml
skip_observers: 'all'
```

## Skip Script Observers

```yaml
--- 
# Skip my_observer.lua and stats.py
skip_observers: 'my_observer, stats'
--- 
```

## Skip Rust Observers

It is also possible to disable rust observers in the setting pane of the system tray application.




