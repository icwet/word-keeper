import React, { FC, useContext } from "react";
import styled from "styled-components";
// Components
import { AppContext } from "components/App/App";
// images
import magnify from "./img/magnify.svg";
// State
import { searchWords } from "components/App/Actions";

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

	return (
		<Magnify>
			<StyledFilterSearch
				onChange={starred ? (e) => dispatch(searchWords(e.target.value)) : () => {}}
				placeholder="Enter some word..."
			/>
		</Magnify>
	);
};
