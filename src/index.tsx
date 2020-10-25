import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App";
import DB from "./db";

export const myDB = new DB("words", 1);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
