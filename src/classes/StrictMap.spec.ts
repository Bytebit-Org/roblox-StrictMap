/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { HttpService } from "@rbxts/services";
import { StrictMap } from "./StrictMap";

const generateGuidKvps = (numberOfKvps: number) => {
	const initialKeyValuePairs = new Array<[string, string]>(numberOfKvps);

	for (let i = 0; i < numberOfKvps; i++) {
		initialKeyValuePairs[i] = [HttpService.GenerateGUID(), HttpService.GenerateGUID()];
	}

	return initialKeyValuePairs;
};

export = () => {
	describe("clear", () => {
		it("should reset size, change isEmpty result, and remove pre-existing keys", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			expect(strictMap.isEmpty()).to.equal(false);
			for (const kvp of initialKeyValuePairs) {
				expect(strictMap.has(kvp[0])).to.equal(true);
				expect(strictMap.mustGet(kvp[0])).to.equal(kvp[1]);
			}

			strictMap.clear();

			expect(strictMap.size()).to.equal(0);
			expect(strictMap.isEmpty()).to.equal(true);
			for (const kvp of initialKeyValuePairs) {
				expect(strictMap.has(kvp[0])).to.equal(false);
				expect(() => strictMap.mustGet(kvp[0])).to.throw();
			}
		});
	});

	describe("delete", () => {
		it("should return false if the key does not exist without changing the size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			expect(strictMap.delete(HttpService.GenerateGUID())).to.equal(false);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
		});

		it("should return true after deleting a key and then false after deleting the same key again, all while changing the size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			expect(strictMap.delete(initialKeyValuePairs[0][0])).to.equal(true);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() - 1);
			expect(strictMap.delete(initialKeyValuePairs[0][0])).to.equal(false);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() - 1);

			const newKey = HttpService.GenerateGUID();
			strictMap.set(newKey, HttpService.GenerateGUID());

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			expect(strictMap.delete(newKey)).to.equal(true);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() - 1);
			expect(strictMap.delete(newKey)).to.equal(false);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() - 1);
		});

		it("should return true after deleting only key and update isEmpty response", () => {
			const strictMap = new StrictMap<string, string>();

			const newKey = HttpService.GenerateGUID();
			strictMap.set(newKey, HttpService.GenerateGUID());

			expect(strictMap.isEmpty()).to.equal(false);

			expect(strictMap.delete(newKey)).to.equal(true);
			expect(strictMap.isEmpty()).to.equal(true);
		});
	});

	describe("entries", () => {
		it("should return an empty array i there are no keys", () => {
			const strictMap = new StrictMap();

			const entries = strictMap.entries();
			expect(entries.isEmpty()).to.equal(true);
		});

		it("should return all keys, but only once each", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			const entries = strictMap.entries();
			expect(entries.size()).to.equal(initialKeyValuePairs.size());

			const entriesSet = new Set(entries); // basically dedupe to ensure only once each
			expect(entriesSet.size()).to.equal(initialKeyValuePairs.size());

			// now make sure each kvp is represented accurately
			for (const entry of entries) {
				expect(strictMap.has(entry[0])).to.equal(true);
				expect(entry[1]).to.equal(strictMap.mustGet(entry[0]));
			}
		});
	});

	describe("forEach", () => {
		it("should not call the callback at all if there are no keys", () => {
			const strictMap = new StrictMap();

			let numberOfCallbackExecutions = 0;
			strictMap.forEach(() => {
				numberOfCallbackExecutions++;
			});

			expect(numberOfCallbackExecutions).to.equal(0);
		});

		it("should provide expected arguments and only go over each key once", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			const keysSet = new Set(strictMap.keys());

			strictMap.forEach((value, key, map) => {
				expect(map).to.equal(strictMap);
				expect(strictMap.mustGet(key)).to.equal(value);
				assert(keysSet.has(key), "key was already iterated over before");

				keysSet.delete(key);
			});

			expect(keysSet.isEmpty()).to.equal(true);
		});
	});

	describe("has", () => {
		it("should return true for keys that have been added and false for others", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			for (const kvp of initialKeyValuePairs) {
				expect(strictMap.has(kvp[0])).to.equal(true);
			}

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.has(newKey)).to.equal(true);

			for (let i = 0; i < 25; i++) {
				expect(strictMap.has(HttpService.GenerateGUID())).to.equal(false);
			}
		});
	});

	describe("isEmpty", () => {
		it("should return true for a newly initialized StrictMap that was not given any key-value pairs in its constructor, but true after a key is set", () => {
			const strictMap = new StrictMap<string, string>();

			expect(strictMap.isEmpty()).to.equal(true);

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.isEmpty()).to.equal(false);
		});

		it("should return false for a newly initialized StrictMap that was given any key-value pairs in its constructor", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.isEmpty()).to.equal(false);

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.isEmpty()).to.equal(false);
		});
	});

	describe("keys", () => {
		it("should return an empty array i there are no keys", () => {
			const strictMap = new StrictMap();

			const keys = strictMap.keys();
			expect(keys.isEmpty()).to.equal(true);
		});

		it("should return all keys, but only once each", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			const keys = strictMap.keys();
			expect(keys.size()).to.equal(initialKeyValuePairs.size());

			const keysSet = new Set(keys); // basically dedupe to ensure only once each
			expect(keysSet.size()).to.equal(initialKeyValuePairs.size());

			// now make sure each key is represented
			for (const key of keys) {
				expect(strictMap.has(key)).to.equal(true);
			}
		});
	});

	describe("mustGet", () => {
		it("should throw if given a key that is not present without changing size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			expect(() => strictMap.mustGet(HttpService.GenerateGUID())).to.throw();
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);

			expect(() => strictMap.mustGet(HttpService.GenerateGUID())).to.throw();
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);
		});

		it("should return the correct value for a given key without changing size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			for (const kvp of initialKeyValuePairs) {
				expect(strictMap.mustGet(kvp[0])).to.equal(kvp[1]);
				expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			}

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);

			expect(strictMap.mustGet(newKey)).to.equal(newValue);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);
		});

		it("should throw for a missing key, then return the correct value for a after that key is set, and then throw again after the key is deleted all without changing size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();

			expect(() => strictMap.mustGet(newKey)).to.throw();
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			strictMap.set(newKey, newValue);

			expect(strictMap.mustGet(newKey)).to.equal(newValue);
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);

			strictMap.delete(newKey);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			expect(() => strictMap.mustGet(newKey)).to.throw();
			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
		});
	});

	describe("set", () => {
		it("should make the key return true for has, the same value for mustGet, and update size accordingly", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			const newKey = HttpService.GenerateGUID();
			const newValue = HttpService.GenerateGUID();
			strictMap.set(newKey, newValue);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size() + 1);
			expect(strictMap.has(newKey)).to.equal(true);
			expect(strictMap.mustGet(newKey)).to.equal(newValue);
		});

		it("should override the value if the key already exists and not update size", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());

			const newValue = HttpService.GenerateGUID();
			strictMap.set(initialKeyValuePairs[0][0], newValue);

			expect(strictMap.size()).to.equal(initialKeyValuePairs.size());
			expect(strictMap.mustGet(initialKeyValuePairs[0][0])).to.equal(newValue);
		});
	});

	describe("size", () => {
		// this is tested in just about every other method so I'm going to call it good to go with just this
		it("should be 0 upon initialization without key-value pairs", () => {
			const strictMap = new StrictMap<string, string>();
			expect(strictMap.size()).to.equal(0);
		});

		it("should be equal to the number of key-value pairs passed into the constructor upon initialization", () => {
			const keyValuePairs = new Array<[string, string]>();

			for (let i = 1; i <= 25; i++) {
				keyValuePairs.push([HttpService.GenerateGUID(), HttpService.GenerateGUID()]);

				const strictMap = new StrictMap<string, string>(keyValuePairs);
				expect(strictMap.size()).to.equal(i);
			}
		});
	});

	describe("toReadonlyMap", () => {
		// not going to add tests for this
	});

	describe("toString", () => {
		// not going to add tests for this
	});

	describe("values", () => {
		it("should return an empty array i there are no keys", () => {
			const strictMap = new StrictMap();

			const values = strictMap.values();
			expect(values.isEmpty()).to.equal(true);
		});

		it("should provide return all values, but only once each (unique values)", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			const values = strictMap.values();
			expect(values.size()).to.equal(initialKeyValuePairs.size());

			const valuesSet = new Set(values); // basically dedupe to ensure only once each
			expect(valuesSet.size()).to.equal(initialKeyValuePairs.size());

			// now make sure each value is represented
			for (const kvp of initialKeyValuePairs) {
				expect(valuesSet.has(kvp[1])).to.equal(true);
			}
		});

		it("should return repeated values the correct number of times", () => {
			const initialKeyValuePairs = generateGuidKvps(3);

			const strictMap = new StrictMap(initialKeyValuePairs);

			// make each value appear i + 1 times, where i is its kvp's index in initialKeyValuePairs
			for (let i = 1; i < initialKeyValuePairs.size(); i++) {
				const kvp = initialKeyValuePairs[i];

				for (let j = 0; j < i; j++) {
					strictMap.set(kvp[0] + "_" + j, kvp[1]);
				}
			}

			const values = strictMap.values();

			// count appearances per value
			const appearanceCountByValue = new Map<string, number>();
			for (const value of values) {
				let appearanceCountForValue = appearanceCountByValue.get(value);
				if (appearanceCountForValue === undefined) {
					appearanceCountForValue = 0;
					appearanceCountByValue.set(value, 0);
				}

				appearanceCountByValue.set(value, appearanceCountForValue + 1);
			}

			// check that appearances per value = that value's kvp's index in initialKeyValuePairs + 1
			for (let i = 0; i < initialKeyValuePairs.size(); i++) {
				const kvp = initialKeyValuePairs[i];
				const value = kvp[1];
				expect(appearanceCountByValue.get(value)).to.equal(i + 1);
			}
		});
	});
};
