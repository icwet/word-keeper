import React, { FC } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
	display: grid;
	grid-template-rows: 1fr 4fr;
	grid-auto-flow: row;
	padding: 12px;
	background: palevioletred;
	border-radius: 8px;
`;

export const Filter: FC = ({ children }) => {
	return <StyledFilter>{children}</StyledFilter>;
};
