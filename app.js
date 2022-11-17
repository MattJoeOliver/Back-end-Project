const express = require("express");

const { getCategories, getReviews } = require("./controllers/categories.js");

const app = express();

app.get("/api/categories", getCategories);

app.get("/api/reviews", getReviews);

module.exports = app;
