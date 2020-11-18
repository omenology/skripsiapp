const Axios = require("axios");
const { BASE_URL } = require("./constant");

module.exports.axios = Axios.create({
  baseURL: BASE_URL,
});
