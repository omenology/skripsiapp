const route = require("express").Router({ mergeParams: true });

const articleController = require("../controller/article");

route.get("/terbaru", articleController.terbaru);
route.get("/pilihan-redaksi", articleController.pilihanRedaksi);
route.get("/kategori", articleController.category);
route.get("/detail", articleController.detail);
route.get("/penulis", articleController.artikelPenulis);
route.get("/cari", articleController.cari);

module.exports = route;
