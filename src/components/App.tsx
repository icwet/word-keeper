// Vendor
import React, { FC, useReducer, createContext, Dispatch } from "react";
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
import { DraggedWord } from "components/DraggedWord";
import { Words } from "components/Words";
import { FilterSearch } from "components/Filter/-Search";
import { Starred } from "components/Starred";
import { FilterPartOfSpeech } from "components/Filter/-PartOfSpeech";
// State
import {
	initialState,
	appReducer,
	InitialState,
	Action,
} from "components/Actions";
import { ADD_STARRED } from "components/Actions/types";

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

export const AppContext = createContext<{
	state: InitialState;
	dispatch: Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

const App: FC = () => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<AppContext.Provider value={{ state, dispatch }}>
				<StyledApp>
					<Menu />
					<Switch>
						<Route exact path="/">
							<Main>
								<Filter>
									<FilterSearch />
								</Filter>
								<Words>
									{state.words &&
										state.words.map((e, i) => (
											<Word key={i}>
												<Name>{e.name}</Name>
												<PartOfSpeech>{e.partOfSpeech}</PartOfSpeech>
												<Description>{e.description}</Description>
												<AddToFavorites
													onClick={() =>
														dispatch({ type: ADD_STARRED, payload: e })
													}
												/>
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
										{state.starred &&
											state.starred.map((e, i) => (
												<DraggedWord key={i} index={i}>
													<Drag />
													<Name>{e.name}</Name>
													<PartOfSpeech>{e.partOfSpeech}</PartOfSpeech>
													<Description>{e.description}</Description>
													<AddToFavorites />
												</DraggedWord>
											))}
									</Words>
								</DndProvider>
							</Starred>
						</Route>
					</Switch>
				</StyledApp>
			</AppContext.Provider>
		</BrowserRouter>
	);
};

export default App;
