const express = require("express");
const router = require("./routes/recipes");
const recipes = require("./routes/recipes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/recipes", recipes);

app.get("/", (req, res) => {
  res.send("Welcome to Personal Recipes");
});

app.listen(PORT, () => {
  console.log("Started listening on Port " + PORT);
});
