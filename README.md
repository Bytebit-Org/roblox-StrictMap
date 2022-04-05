# Strict Map
<p align="center">
  <a href="https://github.com/Bytebit-Org/roblox-StrictMap/actions">
      <img src="https://github.com/Bytebit-Org/roblox-StrictMap/workflows/CI/badge.svg" alt="CI status" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="https://discord.gg/QEz3v8y">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" alt="Discord server" />
  </a>
</p>

Strict Map is a simple class that looks like a regular map but that throws if indexed by a missing key.

## Installation
### roblox-ts
Simply install to your [roblox-ts](https://roblox-ts.com/) project as follows:
```
npm i @rbxts/strict-map
```

### Wally
[Wally](https://github.com/UpliftGames/wally/) users can install this package by adding the following line to their `Wally.toml` under `[dependencies]`:
```
StrictMap = "bytebit/strict-map@1.0.2"
```

Then just run `wally install`.

### From model file
Model files are uploaded to every release as `.rbxmx` files. You can download the file from the [Releases page](https://github.com/Bytebit-Org/roblox-StrictMap/releases) and load it into your project however you see fit.

### From model asset
New versions of the asset are uploaded with every release. The asset can be added to your Roblox Inventory and then inserted into your Place via Toolbox by getting it [here.](https://www.roblox.com/library/1234567890/Strict-Map-Package)

## Documentation
Documentation can be found [here](https://github.com/Bytebit-Org/roblox-StrictMap/tree/master/docs), is included in the TypeScript files directly, and was generated using [TypeDoc](https://typedoc.org/).

## Example
A brief description of the example

<details>
  <summary>roblox-ts example</summary>

  ```ts
  import { PackageClass, packageFunction } from "@rbxts/strict-map";

  export class PackageConsumer {
  }
  ```
</details>

<details>
  <summary>Luau example</summary>

  ```lua
  local PackageClass = require(path.to.modules["strict-map"]).PackageClass
  local packageFunction = require(path.to.modules["strict-map"]).packageFunction

  local PackageConsumer = {}
  PackageConsumer.__index = PackageConsumer

  function new()
    local self = {}
    setmetatable(self, PackageConsumer)

    return self
  end
  
  return {
    new = new
  }
  ```
</details>
