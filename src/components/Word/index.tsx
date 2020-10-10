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
	max-height: 56px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: auto auto 1fr auto;
	gap: 18px;
	align-items: center;
	border-radius: 16px;
	padding: 14px 26px;
	background: #17141d;
	box-shadow: -1rem 0 3rem #000;
	font-size: 18px;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s;
`;
export const Drag = styled.div`
	position: relative;
	width: 24px;
	height: 1px;
	background: #fff;
	&::before,
	&::after {
		position: absolute;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: #fff;
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
	width: 24px;
	height: 24px;
	background: url(${(props) => (props.active ? activeStar : star)}) center/contain no-repeat;
	cursor: pointer;
	&:hover {
		background: url(${activeStar}) center/contain no-repeat;
	}
`;

export const Word: FC<WordProps> = ({ children, onClick }) => {
	return <StyledWord onClick={onClick}>{children}</StyledWord>;
};
