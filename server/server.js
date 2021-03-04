require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
// logger
app.use(morgan("dev"));
// url enco
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets when in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use routes
app.use(routes);

// Connect to the Mongo
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
