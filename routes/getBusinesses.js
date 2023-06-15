const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { getBusinesses, getBusinessTypes } = require("../mysql/queries");

app.get("/", (req, res) => {
  connection.query(getBusinesses(), (error, results) => {
    results.forEach((result, index, array) => {
      connection.query(getBusinessTypes(result.id), (error, typeResults) => {
        const businessTypes = [];
        typeResults.forEach((businessType) =>
          businessTypes.push(businessType.name)
        );
        result.type = businessTypes;
        if (index === array.length - 1) {
          res.send(results);
        }
      });
    });
  });
});

module.exports = app;
