const axios = require("axios");
const url = "http://origam-exam-api.herokuapp.com/api/posts";

let getAllPosts = (url) => {
  axios
    .get(url)
    .then((result) => res.send(result.data))
    .catch((error) => console.error(error));
};

module.exports = getAllPosts;
