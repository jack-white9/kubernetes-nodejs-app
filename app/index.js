const express = require("express");

const app = express();

const NOUN = process.env.NOUN || "world";

app.get("/", (req, res) => {
  res.json(`Hello ${NOUN}!`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
