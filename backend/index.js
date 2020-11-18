const express = require("express");

const route = require("./routes");

const app = new express();

app.use("/", route);
app.use("*", (req, res) => {
  res.status(404).send("Endpoint Not Found");
});

app.listen(4000, "localhost", () => {
  console.log(`Service start on host : localhost and port : 4000`);
});
