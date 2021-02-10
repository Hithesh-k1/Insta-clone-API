require("dotenv").config();
const express = require("express");

const connectToDb = require("./utils/db");
const app = express();
connectToDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
