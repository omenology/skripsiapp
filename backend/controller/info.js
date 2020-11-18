const cheerio = require("cheerio");

const { axios } = require("../utils/conection");
const { BASE_URL } = require("../utils/constant");

module.exports = {
  menuItem: async (req, res) => {
    try {
      const data = [];
      const response = await axios.get("/");
      const $ = cheerio.load(response.data);

      $("nav#cb-nav-bar")
        .find("ul.cb-main-nav>li.menu-item-object-category")
        .each((i, el) => {
          const judul = $(el).find("a").first().text();
          const link = $(el).find("a").attr("href").slice(BASE_URL.length);

          data.push({ judul, link });
        });

      res.status(200).send({
        meta: null,
        data,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  socialMediaLink: async (req, res) => {
    try {
      const data = [];
      const response = await axios.get("/");
      const $ = cheerio.load(response.data);

      $("nav#cb-nav-bar")
        .find("ul.cb-main-nav>li.cb-social-icons-extra")
        .each((i, el) => {
          const link = $(el).find("a").attr("href");

          data.push(link);
        });

      res.status(200).send({
        meta: null,
        data,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  tentang: async (req, res) => {
    try {
      const data = [];
      const response = await axios.get("/tentang");
      const $ = cheerio.load(response.data);

      const judul = $("h1.cb-module-title").text();
      $(".cb-entry-content")
        .find("p")
        .each((i, el) => {
          const paragraph = $(el).text();

          data.push(paragraph);
        });
      res.status(200).send({
        meta: null,
        data: {
          judul,
          paragraph: data,
        },
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  disclaimer: async (req, res) => {
    try {
      const data = [];
      const response = await axios.get("/disclaimer");
      const $ = cheerio.load(response.data);

      const judul = $("h1.cb-module-title").text();
      $(".cb-entry-content ol")
        .find("li")
        .each((i, el) => {
          const paragraph = $(el).text();

          data.push(paragraph);
        });
      res.status(200).send({
        meta: null,
        data: {
          judul,
          paragraph: data,
        },
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
