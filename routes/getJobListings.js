const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const {
  getJobListings,
  getBusinessTypesFromJobListing,
} = require("../mysql/queries");

app.get("/", (req, res) => {
  connection.query(getJobListings(), (error, results) => {
    results.forEach((result, index, array) => {
      connection.query(
        getBusinessTypesFromJobListing(result.user_id),
        (error, posResults) => {
          const poses = [];
          posResults.forEach((pos) => poses.push(pos.name));
          result.type = poses;

          if (index === array.length - 1) {
            res.send(results);
          }
        }
      );
    });
  });
});

module.exports = app;
