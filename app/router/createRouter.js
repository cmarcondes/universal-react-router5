// ./app/router/createRouter.js
import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import routes from "./routes";
export default () => {
  const router = createRouter(routes); //Sends our routes to router5
  router.usePlugin(
    browserPlugin({
      useHash: false // Set useHash to false, as we don't want the url to look like localhost:2000/#/contact
    })
  );
  return router;
};
// Start router5
export const startRouter = (router, initialRoute) => router.start(initialRoute);
