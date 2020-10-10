import React, { FC } from "react";
import styled from "styled-components";

const LoaderSvg = () => (
	<circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
);
const StyledSvg = styled.svg`
	position: relative;
	z-index: 10;
	animation: rotator 1.4s linear infinite;
	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(270deg);
		}
	}

	circle {
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		transform-origin: center;
		animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
	}

	@keyframes colors {
		0% {
			stroke: #4285f4;
		}
		25% {
			stroke: #de3e35;
		}
		50% {
			stroke: #f7c223;
		}
		75% {
			stroke: #1b9a59;
		}
		100% {
			stroke: #4285f4;
		}
	}
	@keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 46.75;
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			transform: rotate(450deg);
		}
	}
`;
const StyledLoader = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10000;
	backdrop-filter: blur(8px);
`;

export const Loader: FC = () => {
	return (
		<StyledLoader>
			<StyledSvg width="65px" height="65px" viewBox="0 0 66 66">
				<LoaderSvg />
			</StyledSvg>
		</StyledLoader>
	);
};
