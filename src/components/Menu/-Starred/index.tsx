import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import star from "./img/star.svg";

const StarredButton = styled.button`
	padding: 0;
	background: transparent;
	border: none;
	text-align: right;
`;

const StyledLink = styled.div`
	a {
		position: relative;
		text-decoration: none;
		color: #fff;
		font-size: 20px;
		&:hover {
			background: linear-gradient(90deg, #ff8a00, #e52e71);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			text-shadow: none;
		}
		&::before {
			position: absolute;
			top: 0;
			bottom: 0;
			left: -34px;
			margin: auto;
			content: "";
			display: block;
			width: 24px;
			height: 24px;
			background: url(${star}) center/contain no-repeat;
		}
	}
`;

export const MenuStarred: FC = () => {
	return (
		<StarredButton>
			<StyledLink>
				<Link to="/starred">Starred Words</Link>
			</StyledLink>
		</StarredButton>
	);
};
