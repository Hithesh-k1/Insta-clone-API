const express = require("express");


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`))