import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
 		box-sizing: border-box;
 		
 }
 ::selection {
		background: palevioletred;
		color: #fff;
 }
  body {
  	margin: 0;
  	padding: 0;
  	font-family: 'Rubik', sans-serif;
  }
`;
