const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { addFreelancer } = require("../mysql/queries");

app.post("/", (req, res) => {
  connection.query(addFreelancer(req.body), (error, results) => {
    res.send({ status: 1, reason: "The freelancer was added" });
  });
});

module.exports = app;
