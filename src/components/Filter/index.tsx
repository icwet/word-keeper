import React, { FC } from "react";
import styled from "styled-components";
import { FilterSearch } from "./-Search";

const StyledFilter = styled.div`
	display: grid;
	grid-auto-flow: column;
`;

export const Filter: FC = () => {
	return (
		<StyledFilter>
			<FilterSearch />
		</StyledFilter>
	);
};
