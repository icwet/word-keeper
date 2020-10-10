import React, { FC, FormEvent, useContext, useState } from "react";
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
	width: 100%;
	height: 44px;
	padding: 12px 42px 12px 24px;
	background: #201c29;
	font-size: 16px;
	color: #fff;
	border-radius: 28px;
	border: 2px solid transparent;
	box-shadow: inset 0 0 12px #000;
	outline: none;
	font-family: "Rubik", sans-serif;

	&:focus {
		border: 2px solid #fff;
	}
`;
const Magnify = styled.div`
	position: relative;
	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 22px;
		margin: auto;
		content: "";
		display: block;
		width: 24px;
		height: 24px;
		background: url(${magnify}) center/contain no-repeat;
	}
`;

export const FilterSearch: FC<FilterSearchProps> = ({ starred }) => {
	const [searchWord, setSearchWord] = useState("");
	const [apiCall, setApiCall] = useState({ lastCallTime: 0, lastCallTimeout: 0 });
	const { dispatch } = useContext(AppContext);
	const starredHandler = (value: string) => {
		dispatch(searchWords(value));
	};

	const handleSubmit = (event: FormEvent) => {
		const currentTime = Date.now();
		const delay = 1000;
		const createRequest = (time: number, delay: number) => {
			return {
				lastCallTime: time,
				lastCallTimeout: setTimeout(() => {
					new Api(
						`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${searchWord.toLowerCase()}\.*&hasDetails=partOfSpeech,definitions&limit=1`
					).getWords(dispatch, getWords, getWordsSuccess, getWordsError);
				}, delay),
			};
		};
		event.preventDefault();
		if (!apiCall.lastCallTimeout) {
			setApiCall(createRequest(currentTime, delay));
		}
		clearTimeout(apiCall.lastCallTimeout);
		setApiCall({ lastCallTime: currentTime, lastCallTimeout: 0 });
		if (!(currentTime - apiCall.lastCallTime >= delay)) {
			setApiCall(createRequest(currentTime, delay));
		}
	};

	return (
		<Magnify>
			{starred ? (
				<StyledFilterSearch onChange={(e) => starredHandler(e.target.value)} placeholder="Enter some word..." />
			) : (
				<form onSubmit={(e) => handleSubmit(e)}>
					<StyledFilterSearch onChange={(e) => setSearchWord(e.target.value)} placeholder="Enter some word..." />
				</form>
			)}
		</Magnify>
	);
};
