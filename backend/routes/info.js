const route = require("express").Router({ mergeParams: true });

const infoController = require("../controller/info");

route.get("/menu-item", infoController.menuItem);
route.get("/social", infoController.socialMediaLink);
route.get("/tentang", infoController.tentang);
route.get("/disclaimer", infoController.disclaimer);

module.exports = route;
