

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 3001;

console.log("connect please")

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

console.log("connect connect please")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
