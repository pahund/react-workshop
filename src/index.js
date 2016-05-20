import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import axios from "axios";
import createSagaMiddleware from "redux-saga";


axios.get("http://localhost:8080/api/topics").then(response => {
    const topics = response.data;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        {
            topics
        },
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(postComment);

    ReactDOM.render(
        <Provider store={store}>
            <App topics={topics} />
        </Provider>,
        document.getElementById("main")
    );
});


