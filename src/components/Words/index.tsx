import React, { FC } from "react";
import styled from "styled-components";

const StyledWords = styled.div`
	display: grid;
	grid-auto-rows: 35px;
	grid-auto-flow: row;
	gap: 8px;
`;

export const Words: FC = ({ children }) => {
	return <StyledWords>{children}</StyledWords>;
};
