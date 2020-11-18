const route = require("express").Router({ mergeParams: true });

const info = require("./info");
const article = require("./article");

route.use("/info", info);
route.use("/artikel", article);

module.exports = route;
