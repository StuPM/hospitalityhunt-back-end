const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const {
  updateBusiness,
  deleteBusinessTypes,
  getIndividualBusinessType,
  addBusinessTypes,
} = require("../mysql/queries");

app.post("/", (req, res) => {
  //Update the business profile with the new data.
  connection.query(updateBusiness(req.body), (error, results) => {
    // Delete business types for current business.
    if (error) {
      res.send({ status: 0, reason: "Update business: " + error.code });
      return;
    }
    connection.query(deleteBusinessTypes(req.body.id));

    //Loop through each business type sent in request.
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
    res.send({ status: 1, reason: "Business updated." });
  });
});

module.exports = app;
