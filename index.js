const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.json([
    {
      name: "Billetera",
      price: 32000,
    },
    {
      name: "Pijama",
      price: 65000,
    },
  ]);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Pijama",
    price: 65000,
  });
});

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No Hay Parametros");
  }
});

app.listen(port, () => {
  console.log("mi puerto", port);
});
