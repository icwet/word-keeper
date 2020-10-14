import React, { FC, useContext } from "react";
import styled from "styled-components";
// State
import { AppContext } from "components/App/App";
import { filterWords } from "components/App/Actions";

const StyledFilterPartOfSpeech = styled.fieldset`
	display: grid;
	padding: 24px 0;
	border: none;
`;
const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	color: #fff;
`;
const StyleInput = styled.input`
	margin-right: 12px;
`;

export const FilterPartOfSpeech: FC = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<StyledFilterPartOfSpeech>
			{state.filters?.map((filterParam, i) => {
				const { name, checked } = filterParam;
				return (
					<StyledLabel key={i}>
						<StyleInput
							type="checkbox"
							value={name}
							onChange={() => dispatch(filterWords({ name, checked: !checked }))}
						/>
						{name}
					</StyledLabel>
				);
			})}
		</StyledFilterPartOfSpeech>
	);
};
