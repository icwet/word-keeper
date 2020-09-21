import React, { FC } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 24px;
	grid-auto-flow: column;
	padding-top: 24px;
`;

export const Main: FC = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};
