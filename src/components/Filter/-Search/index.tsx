import React, { FC } from "react";
import styled from "styled-components";

const StyledFilterSearch = styled.input`
	border: 1px solid #fff;
	max-width: 400px;
	padding: 12px;
`;

export const FilterSearch: FC = () => {
	return <StyledFilterSearch placeholder="Frequency" />;
};
