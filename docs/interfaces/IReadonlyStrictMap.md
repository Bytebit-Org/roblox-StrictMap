[@rbxts/strict-map](../README.md) / IReadonlyStrictMap

# Interface: IReadonlyStrictMap<K, V\>

Defines an interface for reading from a strict map

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `defined` |
| `V` | extends `defined` |

## Hierarchy

- **`IReadonlyStrictMap`**

  ↳ [`IStrictMap`](IStrictMap.md)

## Implemented by

- [`StrictMap`](../classes/StrictMap.md)

## Table of contents

### Methods

- [entries](IReadonlyStrictMap.md#entries)
- [forEach](IReadonlyStrictMap.md#foreach)
- [has](IReadonlyStrictMap.md#has)
- [isEmpty](IReadonlyStrictMap.md#isempty)
- [keys](IReadonlyStrictMap.md#keys)
- [mustGet](IReadonlyStrictMap.md#mustget)
- [size](IReadonlyStrictMap.md#size)
- [toReadonlyMap](IReadonlyStrictMap.md#toreadonlymap)
- [toString](IReadonlyStrictMap.md#tostring)
- [values](IReadonlyStrictMap.md#values)

## Methods

### entries

▸ **entries**(): [`K`, `V`][]

Returns an array of tuples for all members of this instance

#### Returns

[`K`, `V`][]

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:8](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L8)

___

### forEach

▸ **forEach**(`callbackfn`): `void`

Performs the specified action for each (element / pair of elements) in the Map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `self`: [`IReadonlyStrictMap`](IReadonlyStrictMap.md)<`K`, `V`\>) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array. |

#### Returns

`void`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:15](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L15)

___

### has

▸ **has**(`key`): `boolean`

Returns a boolean for whether the given key exists in this instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:20](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L20)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if empty, otherwise false

#### Returns

`boolean`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:25](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L25)

___

### keys

▸ **keys**(): `K`[]

Returns an array with all of this instance's keys

#### Returns

`K`[]

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:30](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L30)

___

### mustGet

▸ **mustGet**(`key`): `V`

Returns the value associated with the given key and throws if it does not exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:35](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L35)

___

### size

▸ **size**(): `number`

Returns the number of elements in this instance

#### Returns

`number`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:40](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L40)

___

### toReadonlyMap

▸ **toReadonlyMap**(): `ReadonlyMap`<`K`, `V`\>

Returns a readonly map with the same data.
Useful for networking through RBXScriptSignals.

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:46](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L46)

___

### toString

▸ **toString**(): `string`

Returns a string representation of this data structure

#### Returns

`string`

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:51](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L51)

___

### values

▸ **values**(): `V`[]

Returns an array with all values of this instance

#### Returns

`V`[]

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:56](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L56)
