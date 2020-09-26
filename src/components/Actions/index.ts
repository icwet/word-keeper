import { Reducer } from "react";
import {
	GET_WORDS,
	LOADING_WORDS,
	GET_WORDS_SUCCESS,
	ADD_STARRED,
	REMOVE_STARRED,
	DRAG_CARD,
} from "./types";
// Helpers
import update from "immutability-helper";

interface InitialState {
	words: Array<{
		name: string;
		partOfSpeech: string;
		description: string;
	}>;
	starred: null | Array<{
		name: string;
		partOfSpeech: string;
		description: string;
	}>;
}
interface Action {
	type: string;
	payload?: {
		dragIndex: number;
		hoverIndex: number;
	};
}

export const initialState: InitialState = {
	words: [
		{
			name: "freedom",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "freedom",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "freedom",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
	],
	starred: null,
};

export const appReducer: Reducer<InitialState, Action> = (state, action) => {
	switch (action.type) {
		case GET_WORDS:
			return initialState;
		case LOADING_WORDS:
			return initialState;
		case GET_WORDS_SUCCESS:
			return initialState;

		case ADD_STARRED:
			return initialState;
		case REMOVE_STARRED:
			return initialState;

		case DRAG_CARD:
			return initialState;
		default:
			return initialState;
	}
};
