const express = require("express");
const app = express.Router();
const connection = require("../mysql/connection");
const {
  getFreelancers,
  getFreelancerPostions,
  getFreelancerContracts,
} = require("../mysql/queries");

app.get("/", (req, res) => {
  connection.query(getFreelancers(), (error, results) => {
    // results.forEach((item) => {
    //   item.image = Buffer.from(item.image).toString('base64')
    // });

    results.forEach((result, index, array) => {
      connection.query(
        getFreelancerPostions(result.user_id),
        (error, posResults) => {
          const poses = [];
          posResults.forEach((pos) => poses.push(pos.name));
          result.position = poses;

          connection.query(
            getFreelancerContracts(result.user_id),
            (error, posResults) => {
              const poses = [];
              posResults.forEach((pos) => poses.push(pos.name));
              result.contract = poses;

              if (index === array.length - 1) {
                res.send(results);
              }
            }
          );
        }
      );
    });
  });
});

module.exports = app;
