// ./app/App.jsx
import React from "react";
import { RouteNode, RouterProvider } from "react-router5";
import { getRoute } from "./router/routes";
import Nav from "./components/Nav.jsx";
export default ({ router }) => {
  return (
    <RouterProvider router={router}>
      <>
        <Nav />
        <RouteNode nodeName="">
          {({ route }) => {
            if (route) {
              const { name } = route;
              const Page = getRoute(name).component;
              if (Page) {
                return <Page />;
              }
            }
            return null;
          }}
        </RouteNode>
      </>
    </RouterProvider>
  );
};
