const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { updateFreelancer } = require("../mysql/queries");

app.post("/", (req, res) => {
  connection.query(updateFreelancer(req.body), (error, results) => {
    res.send(results);
  });
});

module.exports = app;
