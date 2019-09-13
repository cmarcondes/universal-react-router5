// ./app/components/Nav.jsx
import React from "react";
import { Route } from "react-router5";
function Nav(props) {
  const { router } = props;
  return (
    <ul>
      <li onClick={() => router.navigate("home")}>Home</li>
      <li onClick={() => router.navigate("contact")}>Contact</li>
    </ul>
  );
}
export default () => <Route>{({ router }) => <Nav router={router} />}</Route>;
