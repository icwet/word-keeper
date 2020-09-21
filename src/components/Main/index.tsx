import React, { FC } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	display: grid;
	grid-auto-flow: column;
`;

export const Main: FC = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};
