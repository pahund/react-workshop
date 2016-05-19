import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import data from "json!../data/forum.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    {
        topics: data.topics
    }
);

ReactDOM.render(
    <Provider store={store}>
        <App topics={data.topics} />
    </Provider>,
    document.getElementById("main")
);
