const express = require("express");
const Connectmongo = require("./db");

Connectmongo();

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome,to PizzaMania backend Space.");
});

app.use("/auth", require("./routes/auth"));
app.use("/pizza", require("./routes/pizza"));

app.listen(port, (req, res) => {
  console.log(`Listening backend on http://localhost:${port}`);
});
