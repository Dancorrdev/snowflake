const express = require("express");
const routesApi = require("./src/routes/index.routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

routesApi(app);

app.listen(port, () => {
  console.log("mi puerto", port);
});
