const express = require("express");
const router = express.Router();
const sha256 = require("sha256");
const { getRandomString } = require("../utils/maths");
const connection = require("../mysql/connection");
const { checkEmailAndPassword, addToken } = require("../mysql/queries");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //defensive checks
  if (!email || !password) {
    res.send({ status: 0, reason: "Bad request" });
    return;
  }

  const sha256Password = sha256(password + process.env.SALT_PASSWORD);

  connection.query(
    checkEmailAndPassword(email, sha256Password),
    (error, results) => {
      console.log(error);

      if (results[0].count === 0) {
        res.send({ status: 0, reason: "Wrong email or password or both!" });
        return;
      }

      const token = getRandomString(128);
      res.send({ status: 1, token: token.toString() });

      connection.query(addToken(token, results[0].id));
    }
  );
});

module.exports = router;
