// Get words
export const GET_WORDS = "GET_WORDS";
export const LOADING_WORDS = "LOADING_WORDS";
export const GET_WORDS_SUCCESS = "LOADING_WORDS_SUCCESS";
// Add starred
export const ADD_STARRED = "ADD_STARRED";
export const REMOVE_STARRED = "REMOVE_STARRED";
// Dragged cards
export const DRAG_CARD = "DRAG_CARD";
export const ITEM_TYPES = {
	WORD: "word",
};
// Modal
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
// Filter
export const FILTER_WORDS = "FILTER_WORDS";
export const SEARCH_WORDS = "SEARCH_WORDS";

export type Word = {
	name: string;
	partOfSpeech: string;
	description: string;
};
export type Filter = {
	name: string;
	checked: boolean;
};
export interface InitialState {
	words: Word[] | null;
	starred: Word[] | null;
	modal: Word | null;
	filters: Filter[] | null;
	filteredWords: Word[] | null;
	cachedWords: Word[] | null;
	searchLastMatch: string;
}
export interface Action {
	type: string;
	payload?: any;
}
