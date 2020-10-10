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
import { AddToFavorites, Description, Drag, Name, PartOfSpeech, Word } from "components/Word";
import { DraggedWord } from "components/DraggedWord";
import { Words } from "components/Words";
import { FilterSearch } from "components/Filter/-Search";
import { Starred } from "components/Starred";
import { FilterPartOfSpeech } from "components/Filter/-PartOfSpeech";
import { Modal } from "components/Modal";
import { Loader } from "components/Loader";
// State
import { initialState, appReducer, openModal, removeStarred, addStarred } from "components/App/Actions";
import { InitialState, Action } from "components/App/Actions/types";

const StyledApp = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	padding: 24px 13% 24px 13%;
	background: #100e17;
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
	const onClickStopPropagation: CallableFunction = (event: Event, dispatch: Dispatch<Action>, action: Action) => {
		event.stopPropagation();
		dispatch(action);
	};

	return (
		<BrowserRouter>
			<GlobalStyle />
			<AppContext.Provider value={{ state, dispatch }}>
				<StyledApp>
					<Menu />
					{state?.modal && <Modal word={state.modal} />}
					{state?.loadingWords && <Loader />}
					<Switch>
						<Route exact path="/">
							<Main>
								<Filter>
									<FilterSearch />
								</Filter>
								<Words error={state.error}>
									{state.words?.map((word, i) => {
										const starredWord = state.starred?.some((starredWord) => starredWord.name === word.name);
										return (
											<Word key={i} onClick={() => dispatch(openModal(word))}>
												<Name>{word.name}</Name>
												<PartOfSpeech>{word.partOfSpeech}</PartOfSpeech>
												<Description>{word.description}</Description>
												<AddToFavorites
													active={starredWord}
													onClick={
														starredWord
															? (e) => onClickStopPropagation(e, dispatch, removeStarred(word))
															: (e) => onClickStopPropagation(e, dispatch, addStarred(word))
													}
												/>
											</Word>
										);
									})}
								</Words>
							</Main>
						</Route>
						<Route path="/starred">
							<Starred>
								<Filter>
									<FilterSearch starred />
									<FilterPartOfSpeech />
								</Filter>
								<DndProvider backend={HTML5Backend}>
									<Words>
										{state.starred?.map((starredWord, i) => {
											return (
												<DraggedWord key={i} index={i} onClick={() => dispatch(openModal(starredWord))}>
													<Drag />
													<Name>{starredWord.name}</Name>
													<PartOfSpeech>{starredWord.partOfSpeech}</PartOfSpeech>
													<Description>{starredWord.description}</Description>
													<AddToFavorites
														active={true}
														onClick={(e) => onClickStopPropagation(e, dispatch, removeStarred(starredWord))}
													/>
												</DraggedWord>
											);
										})}
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
