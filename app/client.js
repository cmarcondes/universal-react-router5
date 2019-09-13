// ./app/client.js
import React from "react";
import ReactDom from "react-dom";
import createRouter, { startRouter } from "./router/createRouter";
import App from "./App.jsx";
const { initialRouteState } = window;
const router = createRouter();
startRouter(router, initialRouteState);
ReactDom.hydrate(<App router={router} />, document.getElementById("myApp"));
