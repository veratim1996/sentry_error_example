import React, { Component } from 'react';
import { Provider } from "react-redux";
import * as Sentry from "@sentry/browser";
import { createStore, compose, applyMiddleware } from "redux";
import sentryMiddleware from "./sentryMiddleware";
import Button from "./Button";
import './App.css';

Sentry.init({
    dsn: "https://a34610bd8a0846f2b07acd5c45876a5a@sentry.io/1396247"
});

class App extends Component {
    render() {
        const store = createStore(
            (state, action) => {
                console.log(action);
                return {
                    ...state
                };
            },
            {},
            compose(applyMiddleware(sentryMiddleware))
        );

        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <Button />
                    </header>
                </div>
            </Provider>
        );
    }
}

export default App;
