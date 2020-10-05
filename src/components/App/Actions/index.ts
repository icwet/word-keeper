import { Reducer } from "react";
import {
	GET_WORDS,
	GET_WORDS_SUCCESS,
	GET_WORDS_ERROR,
	ADD_STARRED,
	REMOVE_STARRED,
	DRAG_CARD,
	OPEN_MODAL,
	CLOSE_MODAL,
	FILTER_WORDS,
	SEARCH_WORDS,
	InitialState,
	Action,
	Word,
	Filter,
} from "./types";
// Helpers
import update from "immutability-helper";

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
			partOfSpeech: "pronoun",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word3",
			partOfSpeech: "verb",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
		{
			name: "some word4",
			partOfSpeech: "adjective",
			description:
				"lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
		},
	],
	starred: null,
	modal: null,
	filters: null,
	filteredWords: null,
	cachedWords: null,
	searchLastMatch: "",
};

export const getWords = () => ({ type: GET_WORDS });
export const getWordsSuccess = (words: Word[]) => ({ type: GET_WORDS_SUCCESS, payload: words });
export const getWordsError = (e: Error) => ({ type: GET_WORDS_ERROR, payload: e });
export const addStarred = (word: Word) => ({ type: ADD_STARRED, payload: word });
export const removeStarred = (word: Word) => ({ type: REMOVE_STARRED, payload: word });
export const dragCard = (dragIndex: number, hoverIndex: number) => ({
	type: DRAG_CARD,
	payload: { dragIndex, hoverIndex },
});
export const openModal = (word: Word) => ({ type: OPEN_MODAL, payload: word });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const filterWords = (filter: Filter) => ({
	type: FILTER_WORDS,
	payload: { name: filter.name, checked: filter.checked },
});
export const searchWords = (currentSubstring: string) => ({ type: SEARCH_WORDS, payload: currentSubstring });

export const appReducer: Reducer<InitialState, Action> = (state, action) => {
	switch (action.type) {
		case GET_WORDS: {
			return {
				...state,
				loadingWords: true,
			};
		}
		case GET_WORDS_SUCCESS: {
			return {
				...state,
				loadingWords: false,
				words: action.payload,
			};
		}

		case ADD_STARRED: {
			const word = action.payload;
			const { partOfSpeech } = word;
			if (state.starred === null) {
				return {
					...state,
					starred: Array.of(word),
					filters: Array.of({ name: partOfSpeech, checked: false }),
				};
			}
			const findDuplicateWord = state.starred.findIndex((starredWord) => starredWord.name === word.name);
			if (findDuplicateWord !== -1) {
				return {
					...state,
				};
			}
			const findDuplicateFilter = state.filters!.findIndex((filterName) => filterName.name === word.partOfSpeech);
			const resultFiltersList =
				findDuplicateFilter !== -1 ? state.filters : state.filters!.concat({ name: partOfSpeech, checked: false });
			return {
				...state,
				starred: state.starred.concat(word),
				filters: resultFiltersList,
			};
		}
		case REMOVE_STARRED: {
			const word = action.payload;
			const newStarredWords = state.starred?.filter((starredWord) => starredWord.name !== word.name);
			const newFilters = state.filters?.filter((filter) => filter.name !== word.partOfSpeech);
			if (newStarredWords) {
				return {
					...state,
					starred: newStarredWords,
					filters: newFilters || null,
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

		case FILTER_WORDS: {
			const currentFilter = action.payload;
			const { filters, filteredWords, starred } = state;
			if (!starred) {
				return {
					...state,
				};
			}
			const { name, checked } = currentFilter;

			const updateFilter = filters!.map((filter) => {
				if (filter.name === name) {
					return {
						name: name,
						checked: checked,
					};
				}
				return filter;
			});

			let activeFilters = 0;
			if (filters) {
				for (const filter of updateFilter) {
					if (filter.checked) {
						activeFilters++;
					}
				}
			}

			if (checked) {
				if (activeFilters > 1) {
					const getCurrentFilterWords = filteredWords!.filter((word) => word.partOfSpeech === name);
					return {
						...state,
						starred: starred!.concat(getCurrentFilterWords),
						filters: updateFilter,
					};
				}
				const getFilteredWords = starred!.filter((word) => word.partOfSpeech === name);

				return {
					...state,
					filteredWords: starred,
					starred: getFilteredWords,
					filters: updateFilter,
				};
			}

			if (activeFilters === 0) {
				return {
					...state,
					starred: filteredWords,
					filteredWords: null,
					filters: updateFilter,
				};
			}
			const removeCurrentFilter = starred!.filter((word) => word.partOfSpeech !== name);
			return {
				...state,
				starred: removeCurrentFilter,
				filters: updateFilter,
			};
		}
		case SEARCH_WORDS: {
			const currentChars = action.payload;
			const { cachedWords, starred, searchLastMatch } = state;
			if (!starred) {
				return {
					...state,
				};
			}
			const searchLastMatchLen = searchLastMatch.length + 1;
			const currentCharsLen = currentChars.length;
			const isDelete = searchLastMatchLen > currentCharsLen;
			if (currentCharsLen === 1 && !isDelete) {
				const searchFirstWords = starred.filter((word) => word.name.includes(currentChars));
				return {
					...state,
					cachedWords: starred,
					starred: searchFirstWords,
					searchLastMatch: currentChars,
				};
			}
			if (isDelete) {
				const getCachedWords = cachedWords!.filter((word) => word.name.includes(currentChars));
				return {
					...state,
					starred: getCachedWords,
				};
			}
			if (currentCharsLen === searchLastMatchLen) {
				const searchInStarred = starred.filter((word) => word.name.includes(currentChars));
				return {
					...state,
					starred: searchInStarred,
					searchLastMatch: currentChars,
				};
			}
			console.log(state);
			return {
				...state,
				starred: cachedWords,
				cachedWords: null,
			};
		}

		default: {
			return state;
		}
	}
};
