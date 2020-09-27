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

type Word = {
	name: string;
	partOfSpeech: string;
	description: string;
};

export interface InitialState {
	words: Word[] | null;
	starred: Word[] | null;
}
export interface Action {
	type: string;
	payload: any;
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

		case REMOVE_STARRED:
			return initialState;

		case DRAG_CARD:
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
		default:
			return state;
	}
};
