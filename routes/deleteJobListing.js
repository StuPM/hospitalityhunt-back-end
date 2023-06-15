const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { deleteJobListing } = require("../mysql/queries");

app.delete("/:id", (req, res) => {
  connection.query(deleteJobListing(req.params.id), (error, results) => {
    if (error) {
      res.send({ status: 0, reason: error.code });
      return;
    }

    res.send({ status: 1, reason: "Job deleted." });
  });
});

module.exports = app;
