import React, { FC } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
	display: grid;
	grid-template-rows: 1fr 4fr;
	grid-auto-flow: row;
	padding: 24px;
	background-image: linear-gradient(0deg, #ff8a00, #e52e71);
	border-radius: 16px;
`;

export const Filter: FC = ({ children }) => {
	return <StyledFilter>{children}</StyledFilter>;
};
