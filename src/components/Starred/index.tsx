import React, { FC } from "react";
import styled from "styled-components";

const StyledStarred = styled.div`
	display: grid;
	grid-auto-flow: row;
	padding-top: 24px;
`;

const StyledStarredList = styled.main`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 24px;
	grid-auto-flow: column;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: #fff;
`;

export const Starred: FC = ({ children }) => {
	return (
		<StyledStarred>
			<Title>Starred Words</Title>
			<StyledStarredList>{children}</StyledStarredList>
		</StyledStarred>
	);
};
