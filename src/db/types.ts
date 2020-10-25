import { DBSchema } from "idb";
import { Word } from "components/App/Actions/types";

export interface MyDBSchema extends DBSchema {
	"words-store": {
		value: Word;
		key: string;
	};
}
