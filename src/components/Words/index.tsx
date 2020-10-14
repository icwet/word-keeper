import React, { FC } from "react";
import styled from "styled-components";

interface WordsProps {
	error?: string;
}

const StyledWords = styled.div`
	display: grid;
	grid-auto-rows: 56px;
	grid-auto-flow: row;
	gap: 14px;
`;

const StyledError = styled.p`
	display: flex;
	font-size: 32px;
	color: #fff;
`;

export const Words: FC<WordsProps> = ({ children, error }) => {
	return error ? <StyledError>{error.toString()}</StyledError> : <StyledWords>{children}</StyledWords>;
};
