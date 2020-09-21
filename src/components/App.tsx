import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Menu } from "components/Menu";
import styled from "styled-components";
import { Main } from "./Main";
import { Filter } from "./Filter";

const StyledApp = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	padding: 8px;
	background: #f0dfc5;
`;

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<StyledApp>
				<Menu />
				<Switch>
					<Route exact path="/">
						<Main>
							<Filter />
						</Main>
					</Route>
					<Route path="/starred">
						<div>345</div>
					</Route>
				</Switch>
			</StyledApp>
		</BrowserRouter>
	);
};

export default App;
