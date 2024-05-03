const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/string", (req, res) => {
  res.send("welcome to youth thrive backend course");
});

app.get("/json", (req, res) => {
  res.json({ message: "this is a json response" });
});

app.get("/array", (req, res) => {
  res.send(["Access bank", "CareerX", "Youth Thrive"]);
});
app.listen(PORT, () => {
  console.log("listening to port 3000");
});
