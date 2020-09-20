import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Menu } from "components/Menu";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Menu>

			</Menu>
			<div>Hello world!</div>
		</BrowserRouter>
	);
};

export default App;
