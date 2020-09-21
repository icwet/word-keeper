import React, { FC } from "react";
import styled from "styled-components";
import star from "./img/star.svg";

const StyledWord = styled.div`
	max-height: 35px;
	display: grid;
	padding: 8px 12px;
	grid-auto-flow: column;
	gap: 18px;
	align-items: center;
	background: #fff;
	border-radius: 4px;
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
`;

export const PartOfSpeech = styled.p`
	margin: 0;
	font-style: italic;
`;

export const Description = styled.p`
	max-width: 400px;
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const AddToFavorites = styled.div`
	justify-self: center;
	width: 18px;
	height: 18px;
	background: url(${star}) center/contain no-repeat;
	cursor: pointer;
`;

export const Word: FC = ({ children }) => {
	return <StyledWord>{children}</StyledWord>;
};
