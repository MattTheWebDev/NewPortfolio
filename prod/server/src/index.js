import "dotenv/config";
import express from "express";
import cors from "cors";
import request from "request";
import "node-fetch";
import "express-async-await";
const fetch = require("node-fetch");
const app = express();
const marvelAPIsender = require("./marvelMovies");
const async = require("express-async-await");
const apiKey = process.env.API_KEY_SPOON;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hey", (req, res) => res.send("ho!"));

app.listen(process.env.PORT);

app.get("/marvelAPI", function (req, res, next) {
  res.send(marvelAPIsender);
});

app.get("/foodAPI", async function (req, res, next) {
  let ingredients = req.query.ingredients;
  function foodGetApi() {
    return fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=25&apiKey=${process.env.API_KEY_SPOON}`
    );
  }

  const processFoodData = async () => {
    const spoonData = await foodGetApi();

    const spoonResponseData = await spoonData.json();
    
    return spoonResponseData;
  };

  const foodResults = await processFoodData();
  res.json({foodResults});
  
});
