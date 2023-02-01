const express = require("express");
const routesApi = require("./src/routes/index.routes");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./src/middlewares/error.handler");

const app = express();
const port = 3000;

routesApi(app);
app.use(express.json());
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("mi puerto", port);
});
