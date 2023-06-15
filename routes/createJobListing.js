const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { addJobListing } = require("../mysql/queries");

app.post("/", (req, res) => {
  console.log(req.body);
  connection.query(addJobListing(req.body));

  res.send("job listing added");
});

module.exports = app;
