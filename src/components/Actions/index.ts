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

export interface InitialState {
	words: Array<{
		name: string;
		partOfSpeech: string;
		description: string;
	}> | null;
	starred: Array<{
		name: string;
		partOfSpeech: string;
		description: string;
	}> | null;
}
export interface Action {
	type: string;
	payload: {
		dragIndex: number;
		hoverIndex: number;
	};
}

export const initialState: InitialState = {
	words: [
		{
			name: "some word",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
	],
	starred: [
		{
			name: "freedom1",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "freedom2",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "freedom3",
			partOfSpeech: "noun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
	],
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
