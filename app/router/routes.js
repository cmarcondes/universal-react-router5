// ./router/routes.js
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "contact",
    path: `/contact`,
    component: Contact
  }
];
export default routes;
export const getRoute = name => routes.find(r => r.name === name) || {};
