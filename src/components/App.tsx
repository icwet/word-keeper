// Vendor
import React, { FC, useReducer } from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Components
import { GlobalStyle } from "components/GlobalStyle";
import { Menu } from "components/Menu";
import { Main } from "components/Main";
import { Filter } from "components/Filter";
import {
	AddToFavorites,
	Description,
	Drag,
	Name,
	PartOfSpeech,
	Word,
} from "components/Word";
import { Words } from "components/Words";
import { FilterSearch } from "components/Filter/-Search";
import { Starred } from "components/Starred";
import { FilterPartOfSpeech } from "components/Filter/-PartOfSpeech";
// State
import { initialState, appReducer } from "./Actions";

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
	const [state, dispatch] = useReducer(appReducer, initialState);

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
							<DndProvider backend={HTML5Backend}>
								<Words>
									{new Array(4).fill("").map((e) => (
										<Word>
											<Drag />
											<Name>freedom</Name>
											<PartOfSpeech>adjective</PartOfSpeech>
											<Description>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Autem expedita illum inventore libero maxime
												perferendis quam quo sapiente tempora veritatis. Animi
												asperiores deserunt iste laudantium porro, quidem
												repudiandae sint tenetur.
											</Description>
										</Word>
									))}
								</Words>
							</DndProvider>
						</Starred>
					</Route>
				</Switch>
			</StyledApp>
		</BrowserRouter>
	);
};

export default App;
