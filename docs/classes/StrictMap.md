[@rbxts/strict-map](../README.md) / StrictMap

# Class: StrictMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `defined` |
| `V` | extends `defined` |

## Implements

- [`IReadonlyStrictMap`](../interfaces/IReadonlyStrictMap.md)<`K`, `V`\>

## Table of contents

### Constructors

- [constructor](StrictMap.md#constructor)

### Methods

- [clear](StrictMap.md#clear)
- [delete](StrictMap.md#delete)
- [entries](StrictMap.md#entries)
- [forEach](StrictMap.md#foreach)
- [has](StrictMap.md#has)
- [isEmpty](StrictMap.md#isempty)
- [keys](StrictMap.md#keys)
- [mustGet](StrictMap.md#mustget)
- [set](StrictMap.md#set)
- [size](StrictMap.md#size)
- [toReadonlyMap](StrictMap.md#toreadonlymap)
- [toString](StrictMap.md#tostring)
- [values](StrictMap.md#values)

## Constructors

### constructor

• **new StrictMap**<`K`, `V`\>(`entries?`, `getMissingKeyErrorMessage?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `defined` |
| `V` | extends `defined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly [`K`, `V`][] |
| `getMissingKeyErrorMessage?` | (`key`: `K`) => `string` |

#### Defined in

[classes/StrictMap.ts:8](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[classes/StrictMap.ts:16](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L16)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[classes/StrictMap.ts:21](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L21)

___

### entries

▸ **entries**(): [`K`, `V`][]

Returns an array of tuples for all members of this instance

#### Returns

[`K`, `V`][]

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[entries](../interfaces/IReadonlyStrictMap.md#entries)

#### Defined in

[classes/StrictMap.ts:30](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L30)

___

### forEach

▸ **forEach**(`callbackfn`): `void`

Performs the specified action for each (element / pair of elements) in the Map

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `self`: [`StrictMap`](StrictMap.md)<`K`, `V`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[forEach](../interfaces/IReadonlyStrictMap.md#foreach)

#### Defined in

[classes/StrictMap.ts:38](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L38)

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

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[has](../interfaces/IReadonlyStrictMap.md#has)

#### Defined in

[classes/StrictMap.ts:42](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L42)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if empty, otherwise false

#### Returns

`boolean`

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[isEmpty](../interfaces/IReadonlyStrictMap.md#isempty)

#### Defined in

[classes/StrictMap.ts:46](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L46)

___

### keys

▸ **keys**(): `K`[]

Returns an array with all of this instance's keys

#### Returns

`K`[]

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[keys](../interfaces/IReadonlyStrictMap.md#keys)

#### Defined in

[classes/StrictMap.ts:50](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L50)

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

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[mustGet](../interfaces/IReadonlyStrictMap.md#mustget)

#### Defined in

[classes/StrictMap.ts:58](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L58)

___

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`void`

#### Defined in

[classes/StrictMap.ts:71](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L71)

___

### size

▸ **size**(): `number`

Returns the number of elements in this instance

#### Returns

`number`

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[size](../interfaces/IReadonlyStrictMap.md#size)

#### Defined in

[classes/StrictMap.ts:79](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L79)

___

### toReadonlyMap

▸ **toReadonlyMap**(): `ReadonlyMap`<`K`, `V`\>

Returns a readonly map with the same data.
Useful for networking through RBXScriptSignals.

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[toReadonlyMap](../interfaces/IReadonlyStrictMap.md#toreadonlymap)

#### Defined in

[classes/StrictMap.ts:83](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L83)

___

### toString

▸ **toString**(): `string`

Returns a string representation of this data structure

#### Returns

`string`

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[toString](../interfaces/IReadonlyStrictMap.md#tostring)

#### Defined in

[classes/StrictMap.ts:87](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L87)

___

### values

▸ **values**(): `V`[]

Returns an array with all values of this instance

#### Returns

`V`[]

#### Implementation of

[IReadonlyStrictMap](../interfaces/IReadonlyStrictMap.md).[values](../interfaces/IReadonlyStrictMap.md#values)

#### Defined in

[classes/StrictMap.ts:91](https://github.com/Bytebit-Org/roblox-StrictMap/blob/38c927e/src/classes/StrictMap.ts#L91)
