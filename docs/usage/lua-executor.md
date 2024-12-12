---
sidebar_position: 6
---

# Lua Executor

![lua executor](../img/lua_executor.gif)

The Lua executor allows you to embed and execute Lua code blocks directly in your notes. It provides a safe execution environment with restricted access to Lua functions.

## Usage

Add Lua code blocks to your notes using the following syntax:

```lua
print("Hello, World!")
```
When the note is processed, the code will be executed and the output will be added below:


```lua
print("Hello, World!")
```

> Output:
> Hello, World!

## Example


### Basic Calculations
```lua
local sum = 5 + 10
print("Sum:", sum)
```

> Output:
> Sum: 15

### Functions and Complex Logic
```lua
local function factorial(n)
    if n == 0 then return 1 end
    return n * factorial(n-1)
end

print("Factorial of 5:", factorial(5))
```

> Output:
> Factorial of 5: 120

## How it works

The lua executor scans notes for Lua code blocks and executes them using Lua. The output is captured and added to the note below the code block. Blocks have to be enclosed in triple backticks with the language set to `lua`.

It adds following metadata
```yaml
---
lua_blocks_executed: 'true'
last_executed: '2024-12-03 15:56:48'
---
```
