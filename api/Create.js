const axios = require("axios");
const url = "http://origam-exam-api.herokuapp.com/api/posts";

let addNewPost = (post) => {
  axios
    .post(url, post)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      // getUsers();
    })
    .catch((error) => console.error(error));
};

module.exports = addNewPost;
