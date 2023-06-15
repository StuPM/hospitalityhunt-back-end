const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { addBusiness } = require("../mysql/queries");

app.post("/", (req, res) => {
  console.log(req.body);
  connection.query(addBusiness(req.body), (error, results) => {
    if (error) {
      res.send({ status: 0, reason: "Add business: " + error.code });
      return;
    }
    req.body.type.forEach((businessType) => {
      connection.query(
        getIndividualBusinessType(businessType),
        (error, results) => {
          //Get the individual business type code and save with the business id.
          connection.query(
            addBusinessTypes(req.body.id, results[0].id),
            (error, results) => {
              if (error) {
                res.send({
                  status: 0,
                  reason: "Add business type: " + error.code,
                });
                return;
              }
            }
          );
        }
      );
    });
  });
  res.send({ status: 1, reason: "Business added." });
});

module.exports = app;
