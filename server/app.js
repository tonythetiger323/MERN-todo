require("dotenv").config();
import express from "express";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api-routes")(app);

module.exports = app;