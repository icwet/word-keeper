import { Reducer } from "react";
import {
	GET_WORDS,
	LOADING_WORDS,
	GET_WORDS_SUCCESS,
	ADD_STARRED,
	REMOVE_STARRED,
	DRAG_CARD,
	OPEN_MODAL,
	CLOSE_MODAL,
} from "./types";
// Helpers
import update from "immutability-helper";

export type Word = {
	name: string;
	partOfSpeech: string;
	description: string;
};

export interface InitialState {
	words: Word[] | null;
	starred: Word[] | null;
	modal: Word | null;
}
export interface Action {
	type: string;
	payload?: any;
}

export const initialState: InitialState = {
	words: [
		{
			name: "some word1",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word2",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word3",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
	],
	starred: null,
	modal: null,
};

export const appReducer: Reducer<InitialState, Action> = (state, action) => {
	switch (action.type) {
		case GET_WORDS: {
			return state;
		}
		case LOADING_WORDS: {
			return state;
		}
		case GET_WORDS_SUCCESS: {
			return state;
		}

		case ADD_STARRED: {
			const word = action.payload;
			if (state.starred === null) {
				return {
					...state,
					starred: Array.of(word),
				};
			}
			const findDuplicateWord = state.starred.findIndex(
				(starredWord) => starredWord.name === word.name
			);
			if (findDuplicateWord !== -1) {
				return {
					...state,
				};
			}
			return {
				...state,
				starred: state.starred.concat(word),
			};
		}
		case REMOVE_STARRED: {
			const word = action.payload;
			const removeStarredWord = state.starred?.filter(
				(starredWord) => starredWord.name !== word.name
			);
			if (removeStarredWord) {
				return {
					...state,
					starred: removeStarredWord,
				};
			}
			return {
				...state,
			};
		}

		case DRAG_CARD: {
			const dragIndex = action.payload.dragIndex;
			const dragCard = state.starred![dragIndex];
			const hoverIndex = action.payload.hoverIndex;
			const differentOrder = update(state.starred, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard],
				],
			});
			return {
				...state,
				starred: differentOrder,
			};
		}

		case OPEN_MODAL: {
			return {
				...state,
				modal: action.payload,
			};
		}
		case CLOSE_MODAL: {
			return {
				...state,
				modal: null,
			};
		}

		default: {
			return state;
		}
	}
};
