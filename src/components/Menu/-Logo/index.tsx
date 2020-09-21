import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenuLink = styled.a`
	text-decoration: none;
	color: #fff;
`;

export const MenuLogo: FC = () => {
	return (
		<Link to="/" component={StyledMenuLink}>
			Word Keeper
		</Link>
	);
};
