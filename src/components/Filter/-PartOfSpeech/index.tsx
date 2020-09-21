import React from "react";
import styled from "styled-components";

const StyledFilterPartOfSpeech = styled.fieldset`
	padding: 12px 0;
	border: none;
`;

export const FilterPartOfSpeech = () => {
	return (
		<StyledFilterPartOfSpeech>
			<label>
				<input type="checkbox" />
				adjective
			</label>
		</StyledFilterPartOfSpeech>
	);
};
