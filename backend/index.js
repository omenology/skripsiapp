const express = require("express");

const route = require("./routes");

const app = new express();

app.use("/", route);
app.use("*", (req, res) => {
  res.status(404).send("Endpoint Not Found");
});

app.listen(4000, "192.168.0.29", () => {
  console.log(`Service start on host : 192.168.0.29 and port : 4000`);
});
