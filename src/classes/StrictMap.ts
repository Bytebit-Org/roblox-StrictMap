import { HttpService } from "@rbxts/services";
import { IReadonlyStrictMap } from "interfaces/IReadonlyStrictMap";

export class StrictMap<K extends defined, V extends defined> implements IReadonlyStrictMap<K, V> {
	private map: Map<K, V>;
	private numberOfKeys = 0;

	public constructor(
		entries?: ReadonlyArray<[K, V]>,
		private readonly getMissingKeyErrorMessage?: (key: K) => string,
	) {
		this.map = new Map<K, V>(entries ?? []);
		this.numberOfKeys = this.map.size();
	}

	public clear() {
		this.map = new Map<K, V>();
		this.numberOfKeys = 0;
	}

	public delete(key: K) {
		if (!this.map.has(key)) {
			return false;
		}

		this.numberOfKeys--;
		return this.map.delete(key);
	}

	public entries() {
		const result = new Array<[K, V]>();
		for (const [key, value] of this.map) {
			result.push([key, value]);
		}
		return result;
	}

	public forEach(callbackfn: (value: V, key: K, self: this) => void) {
		this.map.forEach((value, key) => callbackfn(value, key, this));
	}

	public has(key: K) {
		return this.map.has(key);
	}

	public isEmpty() {
		return this.numberOfKeys === 0;
	}

	public keys() {
		const result = new Array<K>();
		for (const [key] of this.map) {
			result.push(key);
		}
		return result;
	}

	public mustGet(key: K) {
		const value = this.map.get(key);
		if (value === undefined) {
			if (this.getMissingKeyErrorMessage !== undefined) {
				throw this.getMissingKeyErrorMessage(key);
			} else {
				throw `Attempt to index missing value for key: ${key}`;
			}
		}

		return value;
	}

	public set(key: K, value: V) {
		if (!this.map.has(key)) {
			this.numberOfKeys++;
		}

		this.map.set(key, value);
	}

	public size() {
		return this.numberOfKeys;
	}

	public toReadonlyMap(): ReadonlyMap<K, V> {
		return new ReadonlyMap(this.entries());
	}

	public toString() {
		return HttpService.JSONEncode(this.map);
	}

	public values() {
		const result = new Array<V>();
		for (const [, value] of this.map) {
			result.push(value);
		}
		return result;
	}
}
