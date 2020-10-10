import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenuLink = styled.div`
	a {
		font-size: 20px;
		text-decoration: none;
		color: #fff;
		&:hover {
			background: linear-gradient(90deg, #ff8a00, #e52e71);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			text-shadow: none;
		}
	}
`;

export const MenuLogo: FC = () => {
	return (
		<StyledMenuLink>
			<Link to="/">Word Keeper</Link>
		</StyledMenuLink>
	);
};
