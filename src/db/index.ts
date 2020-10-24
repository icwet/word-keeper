import { openDB } from "idb";
import { Action, Word } from "components/App/Actions/types";
import { addStarred } from "components/App/Actions";
import { MyDB } from "./types";
import { Dispatch } from "react";

export default class DB {
	static async createDb() {
		if (!("indexedDB" in window)) {
			console.log("This browser doesn't support IndexedDB");
			return;
		}
		await openDB<MyDB>("words", 1, {
			upgrade(database) {
				database.createObjectStore("starredWords", { keyPath: "name" });
			},
		});
	}
	static async addStarredWord(word: Word) {
		await openDB<MyDB>("words", 1, {
			upgrade(database) {
				const tx = database.transaction("starredWords", "readwrite");
				const store = tx.store;
				store.add(word);
				return tx.done;
			},
		})
			.then(() => console.log("added word to the store"))
			.catch((error) => console.error(error));
	}
	static async removeStarredWord(name: string) {
		await openDB<MyDB>("words", 1, {
			upgrade(database) {
				const tx = database.transaction("starredWords", "readwrite");
				const store = tx.store;
				store.delete(name);
				return tx.done;
			},
		});
	}
	static async getStarredWords(dispatch: Dispatch<Action>) {
		await openDB<MyDB>("words", 1, {
			async upgrade(database) {
				const tx = database.transaction("starredWords");
				const store = tx.store;
				const starredWords = await store.getAll();
				starredWords.forEach((word) => dispatch(addStarred(word)));
			},
		});
	}
}
