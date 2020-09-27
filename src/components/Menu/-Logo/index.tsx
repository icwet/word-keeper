import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenuLink = styled.div`
	a {
		text-decoration: none;
		color: #fff;
	}
`;

export const MenuLogo: FC = () => {
	return (
		<StyledMenuLink>
			<Link to="/">Word Keeper</Link>
		</StyledMenuLink>
	);
};
