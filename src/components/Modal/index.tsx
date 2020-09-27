import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "components/App";
// State
import { Word } from "../Actions";
// Images
import cancel from "./img/cancel.svg";
import { CLOSE_MODAL } from "../Actions/types";

interface ModalProps {
	word: Word;
}

const StyledModal = styled.div`
	display: grid;
	grid-auto-rows: min-content;
	position: fixed;
	width: 400px;
	height: 600px;
	padding: 24px;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	z-index: 100;
	background: #fff;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
	font-size: 32px;
	padding: 12px 0;
	color: #000;
`;

const PartOfSpeech = styled.small`
	font-size: 14px;
	color: #000;
`;

const Description = styled.p`
	font-size: 16px;
	padding: 12px 0;
`;

const CloseModal = styled.div`
	position: absolute;
	right: 12px;
	top: 12px;
	width: 24px;
	height: 24px;
	background: url(${cancel}) center/contain no-repeat;
	cursor: pointer;
`;

const BackDrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(8px);
	z-index: 100;
`;

export const Modal: FC<ModalProps> = ({ word }) => {
	const { dispatch } = useContext(AppContext);
	const { name, partOfSpeech, description } = word;
	return (
		<>
			<BackDrop onClick={() => dispatch({ type: CLOSE_MODAL })} />
			<StyledModal>
				<CloseModal onClick={() => dispatch({ type: CLOSE_MODAL })} />
				<Title>{name}</Title>
				<PartOfSpeech>{partOfSpeech}</PartOfSpeech>
				<Description>{description}</Description>
			</StyledModal>
		</>
	);
};
