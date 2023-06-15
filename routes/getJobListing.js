const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { getJobListing } = require("../mysql/queries");

app.get("/:id", (req, res) => {
  connection.query(getJobListing(req.params.id), (error, results) => {
    res.send(results);
  });
});

module.exports = app;
