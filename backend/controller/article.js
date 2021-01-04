const cheerio = require("cheerio");

const { axios } = require("../utils/conection");
const { BASE_URL } = require("../utils/constant");
const articles = require("../utils/articles");

module.exports = {
  pilihanRedaksi: async (req, res) => {
    try {
      const data = [];
      const response = await axios.get("/");
      const $ = cheerio.load(response.data);

      $("section#cb-section-a")
        .find("article")
        .each((i, el) => {
          const judul = $(el).find("h2.cb-post-title").text();
          const pengantar = $(el).find("div.cb-excerpt").text();
          const penulis = $(el).find(".cb-author").text();
          const tanggal = $(el).find(".cb-date").text();
          const link = $(el).find("h2.cb-post-title a").attr("href").slice(BASE_URL.length);

          data.push({ judul, pengantar, penulis, tanggal: new Date(tanggal), link });
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
  terbaru: async (req, res) => {
    try {
      const page = req.query.page || 1;

      const data = await articles(`/page/${page}`);

      res.status(200).send({
        meta: null,
        data,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  category: async (req, res) => {
    const url = req.header("url");
    try {
      const page = req.query.page || 1;

      const data = await articles(`${url}page/${page}`);

      res.status(200).send({
        meta: null,
        data,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  detail: async (req, res) => {
    const url = req.header("url");
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const judul = $("h1.entry-title.cb-entry-title.entry-title.cb-title").text();
      const gambar = $("#cb-featured-image .cb-mask img").attr("srcset").split(" ")[0];
      const penulis = $(".cb-author.author .fn a").children().remove().end().text();
      const penulisLink = $(".cb-author.author .fn a").attr("href").slice(BASE_URL.length);
      const tanggal = $(".cb-entry-header .cb-byline span.cb-date time").text();

      const pargraph = [];
      $("span.cb-itemprop")
        .find("p")
        .each((i, el) => {
          pargraph.push($(el).text());
        });
      pargraph.pop();
      res.status(200).send({
        meta: null,
        data: {
          gambar: gambar,
          judul,
          penulis,
          penulisLink,
          tanggal,
          pargraph,
        },
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  artikelPenulis: async (req, res) => {
    const url = req.header("url");
    try {
      const page = req.query.page || 1;
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const nama = $(".cb-author-details .cb-meta a").text();
      const imgUrl = $(".cb-author-details .cb-mask img").attr("src");
      const data = await articles(`${url}page/${page}`);

      res.status(200).send({
        meta: null,
        data: {
          profile: {
            nama,
            imgUrl,
          },
          artikel: data,
        },
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  cari: async (req, res) => {
    const url = req.header("url");
    try {
      const page = req.query.page || 1;
      const cari = req.query.s || "";

      const data = await articles(`page/${page}/?s=${cari}`);

      res.status(200).send({
        meta: null,
        data,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
