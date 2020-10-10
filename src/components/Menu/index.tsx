import React, { FC } from "react";
import styled from "styled-components";
import { MenuStarred } from "./-Starred";
import { MenuLogo } from "./-Logo";

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;
	padding: 24px;
	border-radius: 16px;
	background: #17141d;
	box-shadow: -1rem 0 3rem #000;
`;

export const Menu: FC = () => {
	return (
		<MenuStyled>
			<MenuLogo />
			<MenuStarred />
		</MenuStyled>
	);
};
