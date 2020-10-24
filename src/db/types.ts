import { DBSchema } from "idb";
import { Word } from "components/App/Actions/types";

export interface MyDB extends DBSchema {
	starredWords: {
		value: Word;
		key: string;
	};
}
