const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { updateJobListing } = require("../mysql/queries");

app.post("/", (req, res) => {
  connection.query(updateJobListing(req.body), (error, results) => {
    res.send(results);
  });
});

module.exports = app;
