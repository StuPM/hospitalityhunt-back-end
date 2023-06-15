require("dotenv").config(); //brings in local config information
const express = require("express"); //just like import express from 'express';
const app = express();
const { auth } = require("./middlware");
const helmet = require("helmet");

app.use(helmet());

const cors = require("cors");
app.use(cors());

//it provides access to the body of the request, turns body into an object
app.use(express.json());

//done routes

// NEVER HAS AUTH
//signup < creates a new user
app.use("/signup", require("./routes/signup"));
//login < checks if the user and passwords matches and then gets a token
app.use("/login", require("./routes/login"));
//onboarding - choose between freelancer or business
app.use("/onboarding", require("./routes/onboarding"));

//ALWAYS HAVE AUTH
//createFreelancer < adds a freelancer
app.use("/createFreelancer", auth, require("./routes/createFreelancer"));
//createJobListing < create a job listing
app.use("/createJobListing", auth, require("./routes/createJobListing"));
//logout < destorys the token
app.use("/logout", require("./routes/logOut")); //amelia - wire up to front end
//createBusiness < adds a business
app.use("/createBusiness", require("./routes/createBusiness")); //amelia
//bernie
app.use("/getFreelancers", require("./routes/getFreelancers"));
//getJobListing < a single job
app.use("/getJobListing", require("./routes/getJobListing")); // get single listing
//getBusinesses
app.use("/getBusinesses", require("./routes/getBusinesses"));
//getJobListings
app.use("/getJobListings", require("./routes/getJobListings")); //get all listings
//updateFreelancer
app.use("/updateFreelancer", require("./routes/updateFreelancer"));
//updateBusiness
app.use("/updateBusiness", require("./routes/updateBusiness")); //stuart
app.use("/updateJobListing", require("./routes/updateJobListing"));
//removeListing < deletes a listing - amelia
app.use("/deleteJobListing", require("./routes/deleteJobListing"));

//start the server
const PORT = process.env.PORT || 6001; //use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
  console.log(`The server is alive on port ${PORT}`);
});
