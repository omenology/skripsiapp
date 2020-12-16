const cheerio = require("cheerio");
const { axios } = require("./conection");
const { BASE_URL } = require("../utils/constant");

module.exports = async (url) => {
  const response = await axios.get(`${url}`);
  const $ = cheerio.load(response.data);

  const data = [];
  $(".cb-main")
    .find("article")
    .each((i, el) => {
      const judul = $(el).find("h2.cb-post-title").text();
      const gambar = $(el).find(".cb-mask.cb-img-fw a img").attr("srcset").split(" ")[0];
      const pengantar = $(el).find("div.cb-excerpt").text();
      const penulis = $(el).find(".cb-author").text();
      const penulisLink = $(el).find(".cb-author a").attr("href").slice(BASE_URL.length);
      const tanggal = $(el).find(".cb-byline .cb-date").text();
      const link = $(el).find("h2.cb-post-title a").attr("href").slice(BASE_URL.length);

      data.push({ judul, gambar, pengantar, penulis, penulisLink, tanggal, link });
    });

  return data;
};
