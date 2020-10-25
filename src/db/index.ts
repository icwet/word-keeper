import { IDBPDatabase, openDB } from "idb";
import { Action, Word } from "components/App/Actions/types";
import { addStarred } from "components/App/Actions";
import { MyDBSchema } from "./types";
import { Dispatch } from "react";

export default class DB {
	private readonly _dbName: string;
	private readonly _dbVersion: number;
	private _dbCreated: boolean;

	constructor(dbName = "words", version = 1) {
		this._dbName = dbName;
		this._dbVersion = version;
		this._dbCreated = false;
	}
	async _openDBWithSchema(): Promise<IDBPDatabase<MyDBSchema>> {
		if (this._dbCreated) return openDB<MyDBSchema>(this._dbName, this._dbVersion);
		this._dbCreated = true;
		return openDB<MyDBSchema>(this._dbName, this._dbVersion, {
			upgrade(db) {
				db.createObjectStore("words-store", { keyPath: "name" });
			},
		});
	}

	async putDBWithSchema(word: Word) {
		const db = await this._openDBWithSchema();
		const tx = db.transaction(["words-store"], "readwrite");
		const keyStore = tx.objectStore("words-store");
		keyStore.put(word);
		return db;
	}

	async removeDBWithSchema(name: string) {
		const db = await this._openDBWithSchema();
		const tx = db.transaction(["words-store"], "readwrite");
		const keyStore = tx.objectStore("words-store");
		keyStore.delete(name);
	}

	async getAllDBWithSchema(dispatch: Dispatch<Action>) {
		const db = await this._openDBWithSchema();
		const tx = db.transaction(["words-store"], "readonly");
		const keyStore = tx.objectStore("words-store");
		const allWords = await keyStore.getAll();
		allWords.forEach((word) => dispatch(addStarred(word)));
	}
}
