import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "components/App/App";
// State
import { Word } from "components/App/Actions/types";
// Images
import close from "./img/close.svg";
import { closeModal } from "components/App/Actions";

interface ModalProps {
	word: Word;
}

const StyledModal = styled.div`
	display: grid;
	grid-auto-rows: min-content;
	position: fixed;
	width: 400px;
	padding: 24px;
	left: 0;
	right: 0;
	margin: auto;
	background: #201c29;
	color: #fff;
	border-radius: 16px;
	box-shadow: -1rem 0 3rem #000;
	z-index: 100;
`;

const Title = styled.h1`
	font-size: 32px;
	padding: 12px 0;
	margin: 0;
`;

const PartOfSpeech = styled.small`
	font-size: 20px;
`;

const Description = styled.p`
	font-size: 18px;
	padding: 12px 0;
	margin: 0;
`;

const CloseModal = styled.div`
	position: absolute;
	right: 24px;
	top: 24px;
	width: 24px;
	height: 24px;
	background: url(${close}) center/contain no-repeat;
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
			<BackDrop onClick={() => dispatch(closeModal())} />
			<StyledModal>
				<CloseModal onClick={() => dispatch(closeModal())} />
				<Title>{name}</Title>
				<PartOfSpeech>{partOfSpeech}</PartOfSpeech>
				<Description>{description}</Description>
			</StyledModal>
		</>
	);
};
