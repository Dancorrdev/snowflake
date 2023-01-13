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

app.get("")

app.listen(port, () => {
  console.log("mi puerto", port);
});
