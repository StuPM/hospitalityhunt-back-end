const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { setOnboardingType } = require("../mysql/queries");

app.post("/", (req, res) => {
  //1 = isFreelancer, 0 = business
  connection.query(
    setOnboardingType(req.body.email, req.body.type),
    (error, results) => {
      res.send(results);
    }
  );
});

module.exports = app;
