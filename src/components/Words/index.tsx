import React, { FC } from "react";
import styled from "styled-components";

interface WordsProps {
	error?: string;
}

const StyledWords = styled.div`
	display: grid;
	grid-auto-rows: 35px;
	grid-auto-flow: row;
	gap: 8px;
`;

const StyledError = styled.p`
	display: flex;
	font-size: 18px;
	color: #000;
`;

export const Words: FC<WordsProps> = ({ children, error }) => {
	return error ? <StyledError>{error.toString()}</StyledError> : <StyledWords>{children}</StyledWords>;
};
