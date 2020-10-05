import React, { ChangeEvent, FC, KeyboardEventHandler, useContext } from "react";
import styled from "styled-components";
import Api from "api";
// Components
import { AppContext } from "components/App/App";
// images
import magnify from "./img/magnify.svg";
// State
import { searchWords, getWords, getWordsSuccess, getWordsError } from "components/App/Actions";

interface FilterSearchProps {
	starred?: boolean;
}

const StyledFilterSearch = styled.input`
	border: 1px solid transparent;
	width: 100%;
	height: 40px;
	padding: 12px 42px 12px 12px;
	border-radius: 4px;
	outline: none;
	&:focus {
		border: 1px solid palevioletred;
	}
`;
const Magnify = styled.div`
	position: relative;
	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 12px;
		margin: auto;
		content: "";
		display: block;
		width: 24px;
		height: 24px;
		background: url(${magnify}) center/contain no-repeat;
	}
`;

export const FilterSearch: FC<FilterSearchProps> = ({ starred }) => {
	const { dispatch } = useContext(AppContext);
	const starredHandler = (value: string) => {
		dispatch(searchWords(value));
	};
	const mainHandler = (event: KeyboardEvent) => {
		console.log(event);
		/*new Api(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=${value}&limit=2`).getWords(
			dispatch,
			getWords,
			getWordsSuccess,
			getWordsError
		);*/
	};

	return (
		<Magnify>
			<StyledFilterSearch
				onChange={starred ? (e) => starredHandler(e.target.value) : () => {}}
				placeholder="Enter some word..."
			/>
		</Magnify>
	);
};
