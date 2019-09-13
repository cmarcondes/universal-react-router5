// ./app/server.js
import express from "express";
import path from "path";
import renderer from "./renderer";
import createRouter from "./router/createRouter";
const server = express();
server.use(
  "/static/",
  express.static(path.resolve(process.cwd(), "dist", "client"))
);
server.get("*", (req, res) => {
  const router = createRouter();
  router.start(req.originalUrl, (err, routeState) => {
    if (err) {
      return res.send("Page not found");
    }
    const html = renderer(router, routeState);
    res.send(html);
  });
});
server.listen(2000, () => console.log("Running on port 2000"));
