const connection = require("../mysql/connection");

const auth = (req, res, next) => {
  if (!req.headers.token) {
    res.send("No token");
    return;
  }

  connection.query(
    `SELECT count(token) as count, tokens.user_id
                        FROM tokens
                            WHERE token = "${req.headers.token}"`,

    (error, results) => {
      if (results[0].count === 0) {
        res.send("Bad token!");
        return;
      }

      req.user_id = results[0].user_id;

      next();
    }
  );
};

module.exports = { auth };
