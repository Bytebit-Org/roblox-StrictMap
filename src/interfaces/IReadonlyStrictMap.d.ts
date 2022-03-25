/**
 * Defines an interface for reading from a strict map
 */
 export interface IReadonlyStrictMap<K extends defined, V extends defined> {
	/**
	 * Returns an array of tuples for all members of this instance
	 */
	entries(): Array<[K, V]>;

	/**
	 * Performs the specified action for each (element / pair of elements) in the Map
	 * @param callbackfn  A function that accepts up to three arguments.
     * forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(callbackfn: (value: V, key: K, self: this) => void): void;

	/**
	 * Returns a boolean for whether the given key exists in this instance
	 */
	has(key: K): boolean;

	/**
	 * Returns true if empty, otherwise false
	 */
	isEmpty(): boolean;

	/**
	 * Returns an array with all of this instance's keys
	 */
	keys(): Array<K>;

	/**
	 * Returns the value associated with the given key and throws if it does not exist
	 */
	mustGet(key: K): V;

	/**
	 * Returns the number of elements in this instance
	 */
	size(): number;

	/**
	 * Returns a readonly map with the same data.
	 * Useful for networking through RBXScriptSignals.
	 */
	toReadonlyMap(): ReadonlyMap<K, V>;

	/**
	 * Returns a string representation of this data structure
	 */
	toString(): string;

	/**
	 * Returns an array with all values of this instance
	 */
	values(): Array<V>;
}
