const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const { addUser } = require("../mysql/queries");
const sha256 = require("sha256");
const sendEmail = require("../email/send");
const { welcome } = require("../email/templates");

app.post("/", (req, res) => {
  const { email, password, isFreelancer } = req.body;

  console.log(sha256(password + process.env.SALT_PASSWORD), password, process.env.SALT_PASSWORD);
  connection.query(
    addUser(email, sha256(password + process.env.SALT_PASSWORD), isFreelancer),
    (error) => {
      if (error && error.code === "ER_DUP_ENTRY") {
        res.send({ status: 0, reason: "You are already a user." });
        return;
      }

      //send them an email
      //sendEmail('Welcome', welcome(email), email); //to stop sending messages during testing

      res.send({ status: 1, reason: "user added" });
    }
  );
});

module.exports = app;
