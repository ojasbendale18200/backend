const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("App is running");
});
