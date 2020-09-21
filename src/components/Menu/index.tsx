import React, { FC } from "react";
import styled from "styled-components";
import { MenuStarred } from "./-Starred";
import { MenuLogo } from "./-Logo";

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;
	padding: 12px;
	border-radius: 4px;
	background: palevioletred;
`;

export const Menu: FC = () => {
	return (
		<MenuStyled>
			<MenuLogo />
			<MenuStarred />
		</MenuStyled>
	);
};
