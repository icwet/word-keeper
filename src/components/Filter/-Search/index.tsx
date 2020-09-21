import React, { FC } from "react";
import styled from "styled-components";

const StyledFilterSearch = styled.input`
	border: 1px solid transparent;
	width: 100%;
	height: 40px;
	padding: 12px;
	border-radius: 4px;
	outline: none;
	&:focus {
		border: 1px solid palevioletred;
	}
`;

export const FilterSearch: FC = () => {
	return <StyledFilterSearch placeholder="Type ahead..." />;
};
