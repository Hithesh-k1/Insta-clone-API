require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./utils/db");
const auth = require("./routes/auth");
const app = express();
connectToDb();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
