// Vendor
import React, { FC } from "react";
import styled from "styled-components";
// Images
import star from "./img/star.svg";
import activeStar from "./img/active-star.svg";
// Interfaces
interface WordProps {
	onClick?: () => void;
}
interface AddToFavoritesProps {
	active?: boolean;
}

// Styled components
export const StyledWord = styled.div`
	max-height: 35px;
	display: grid;
	padding: 8px 12px;
	grid-auto-flow: column;
	gap: 18px;
	align-items: center;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
`;
export const Drag = styled.div`
	position: relative;
	width: 24px;
	height: 1px;
	background: #000;
	&::before,
	&::after {
		position: absolute;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: #000;
	}
	&::before {
		top: -4px;
	}
	&::after {
		bottom: -4px;
	}
`;
export const Name = styled.p`
	margin: 0;
	font-weight: 500;
	user-select: none;
`;
export const PartOfSpeech = styled.p`
	margin: 0;
	font-style: italic;
	user-select: none;
`;
export const Description = styled.p`
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	user-select: none;
`;
export const AddToFavorites = styled.div<AddToFavoritesProps>`
	justify-self: center;
	width: 18px;
	height: 18px;
	background: url(${(props) => (props.active ? activeStar : star)}) center/contain no-repeat;
	cursor: pointer;
	&:hover {
		background: url(${activeStar}) center/contain no-repeat;
	}
`;

export const Word: FC<WordProps> = ({ children, onClick }) => {
	return <StyledWord onClick={onClick}>{children}</StyledWord>;
};
