import React, { FC, useContext } from "react";
import styled from "styled-components";
// State
import { AppContext } from "components/App/App";
import { FILTER_WORDS } from "components/App/Actions/types";

const StyledFilterPartOfSpeech = styled.fieldset`
	display: grid;
	padding: 12px 0;
	border: none;
`;
const StyledLabel = styled.label`
	color: #000;
`;

export const FilterPartOfSpeech: FC = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<StyledFilterPartOfSpeech>
			{state.filters?.map((filterParam, i) => {
				const { name, checked } = filterParam;
				return (
					<StyledLabel key={i}>
						<input
							type="checkbox"
							value={name}
							onChange={() => dispatch({ type: FILTER_WORDS, payload: { name, checked: !checked } })}
						/>
						{name}
					</StyledLabel>
				);
			})}
		</StyledFilterPartOfSpeech>
	);
};
