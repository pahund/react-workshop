import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import data from "json!../data/forum.json";

ReactDOM.render(<App topics={data.topics} />, document.getElementById("main"));
