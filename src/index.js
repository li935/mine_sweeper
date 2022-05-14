import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import Store from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = new Store();

root.render(
    <Provider {...store}>
        <App/>
    </Provider>
);