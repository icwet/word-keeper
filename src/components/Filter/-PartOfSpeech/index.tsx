import React from "react";
import styled from "styled-components";

const StyledFilterPartOfSpeech = styled.fieldset`
	padding: 12px 0;
	border: none;
`;
const StyledLabel = styled.label`
	color: #000;
`;

export const FilterPartOfSpeech = () => {
	return (
		<StyledFilterPartOfSpeech>
			<StyledLabel>
				<input type="checkbox" />
				adjective
			</StyledLabel>
		</StyledFilterPartOfSpeech>
	);
};
