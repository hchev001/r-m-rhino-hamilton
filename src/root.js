import React from 'react';
import App from './App'
import { Provider } from "react-redux";

export const Root = (props) => {

    const { store } = props;
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}