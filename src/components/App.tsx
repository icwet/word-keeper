import React, {FC} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Menu } from "components/Menu";
import styled from "styled-components";
import { Main } from "./Main";
import { Filter } from "./Filter";
import {
	AddToFavorites,
	Description,
	Drag,
	Name,
	PartOfSpeech,
	Word,
} from "./Word";
import { Words } from "./Words";
import { FilterSearch } from "./Filter/-Search";
import { Starred } from "./Starred";
import { FilterPartOfSpeech } from "./Filter/-PartOfSpeech";

const StyledApp = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	padding: 24px;
	background: #f0dfc5;
`;

const App: FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<StyledApp>
				<Menu />
				<Switch>
					<Route exact path="/">
						<Main>
							<Filter>
								<FilterSearch />
							</Filter>
							<Words>
								{new Array(10).fill("").map((e) => (
									<Word>
										<Name>freedom</Name>
										<PartOfSpeech>adjective</PartOfSpeech>
										<Description>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Autem expedita illum inventore libero maxime perferendis
											quam quo sapiente tempora veritatis. Animi asperiores
											deserunt iste laudantium porro, quidem repudiandae sint
											tenetur.
										</Description>
										<AddToFavorites />
									</Word>
								))}
							</Words>
						</Main>
					</Route>
					<Route path="/starred">
						<Starred>
							<Filter>
								<FilterSearch />
								<FilterPartOfSpeech />
							</Filter>
							<Words>
								{new Array(4).fill("").map((e) => (
									<Word>
										<Drag />
										<Name>freedom</Name>
										<PartOfSpeech>adjective</PartOfSpeech>
										<Description>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Autem expedita illum inventore libero maxime perferendis
											quam quo sapiente tempora veritatis. Animi asperiores
											deserunt iste laudantium porro, quidem repudiandae sint
											tenetur.
										</Description>
									</Word>
								))}
							</Words>
						</Starred>
					</Route>
				</Switch>
			</StyledApp>
		</BrowserRouter>
	);
};

export default App;
