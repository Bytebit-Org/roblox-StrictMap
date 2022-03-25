[@rbxts/strict-map](../README.md) / IStrictMap

# Interface: IStrictMap<K, V\>

Defines the interface for writing to a strict map

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `defined` |
| `V` | extends `defined` |

## Hierarchy

- [`IReadonlyStrictMap`](IReadonlyStrictMap.md)<`K`, `V`\>

  ↳ **`IStrictMap`**

## Table of contents

### Methods

- [clear](IStrictMap.md#clear)
- [delete](IStrictMap.md#delete)
- [entries](IStrictMap.md#entries)
- [forEach](IStrictMap.md#foreach)
- [has](IStrictMap.md#has)
- [isEmpty](IStrictMap.md#isempty)
- [keys](IStrictMap.md#keys)
- [mustGet](IStrictMap.md#mustget)
- [set](IStrictMap.md#set)
- [size](IStrictMap.md#size)
- [toReadonlyMap](IStrictMap.md#toreadonlymap)
- [toString](IStrictMap.md#tostring)
- [values](IStrictMap.md#values)

## Methods

### clear

▸ **clear**(): `void`

Deletes all members of this instance

#### Returns

`void`

#### Defined in

[interfaces/IStrictMap.d.ts:10](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IStrictMap.d.ts#L10)

___

### delete

▸ **delete**(`key`): `boolean`

Deletes the given key from this instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

A boolean indicating whether or not a value was removed.

#### Defined in

[interfaces/IStrictMap.d.ts:16](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IStrictMap.d.ts#L16)

___

### entries

▸ **entries**(): [`K`, `V`][]

Returns an array of tuples for all members of this instance

#### Returns

[`K`, `V`][]

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[entries](IReadonlyStrictMap.md#entries)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:8](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L8)

___

### forEach

▸ **forEach**(`callbackfn`): `void`

Performs the specified action for each (element / pair of elements) in the Map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `self`: [`IStrictMap`](IStrictMap.md)<`K`, `V`\>) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array. |

#### Returns

`void`

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[forEach](IReadonlyStrictMap.md#foreach)

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

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[has](IReadonlyStrictMap.md#has)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:20](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L20)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if empty, otherwise false

#### Returns

`boolean`

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[isEmpty](IReadonlyStrictMap.md#isempty)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:25](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L25)

___

### keys

▸ **keys**(): `K`[]

Returns an array with all of this instance's keys

#### Returns

`K`[]

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[keys](IReadonlyStrictMap.md#keys)

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

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[mustGet](IReadonlyStrictMap.md#mustget)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:35](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L35)

___

### set

▸ **set**(`key`, `value`): `boolean`

Associates a key with a value which can be accessed later by the given key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`boolean`

#### Defined in

[interfaces/IStrictMap.d.ts:21](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IStrictMap.d.ts#L21)

___

### size

▸ **size**(): `number`

Returns the number of elements in this instance

#### Returns

`number`

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[size](IReadonlyStrictMap.md#size)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:40](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L40)

___

### toReadonlyMap

▸ **toReadonlyMap**(): `ReadonlyMap`<`K`, `V`\>

Returns a readonly map with the same data.
Useful for networking through RBXScriptSignals.

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[toReadonlyMap](IReadonlyStrictMap.md#toreadonlymap)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:46](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L46)

___

### toString

▸ **toString**(): `string`

Returns a string representation of this data structure

#### Returns

`string`

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[toString](IReadonlyStrictMap.md#tostring)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:51](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L51)

___

### values

▸ **values**(): `V`[]

Returns an array with all values of this instance

#### Returns

`V`[]

#### Inherited from

[IReadonlyStrictMap](IReadonlyStrictMap.md).[values](IReadonlyStrictMap.md#values)

#### Defined in

[interfaces/IReadonlyStrictMap.d.ts:56](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/interfaces/IReadonlyStrictMap.d.ts#L56)
