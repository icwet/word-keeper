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

const StyledLink = styled.a`
	position: relative;
	text-decoration: none;
	color: #fff;
	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -18px;
		margin: auto;
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		background: url(${star}) center/contain no-repeat;
	}
`;

export const MenuStarred: FC = () => {
	return (
		<StarredButton>
			<Link to="/starred" component={StyledLink}>
				Starred Words
			</Link>
		</StarredButton>
	);
};
