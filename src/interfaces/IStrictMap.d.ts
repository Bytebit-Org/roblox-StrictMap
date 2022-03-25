import { IReadonlyStrictMap } from "./IReadonlyStrictMap";

/**
 * Defines the interface for writing to a strict map
 */
export interface IStrictMap<K extends defined, V extends defined> extends IReadonlyStrictMap<K, V> {
	/**
	 * Deletes all members of this instance
	 */
	clear(): void

	/**
	 * Deletes the given key from this instance
	 * @returns A boolean indicating whether or not a value was removed.
	 */
	delete(key: K): boolean

	/**
	 * Associates a key with a value which can be accessed later by the given key
	 */
	set(key: K, value: V): boolean
}