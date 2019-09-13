// ./app/renderer.js
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
const toHTML = (markup, routeState) =>
  `<html>
    <head></head>
    <body>
      <div id="myApp">${markup}</div>
      <script>
        window.initialRouteState = ${JSON.stringify(routeState)}
      </script>
      <script src="/static/client.bundle.js"></script>
    </body>
  </html>`;
export default (router, routeState) =>
  toHTML(renderToString(<App router={router} />), routeState);
