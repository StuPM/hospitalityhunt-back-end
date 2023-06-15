const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { deleteToken } = require("../mysql/queries");

app.delete("/", (req, res) => {
  connection.query(deleteToken(req.headers.token));

  res.send({ status: 1, reason: "The user was logged out" });
});

module.exports = app;
