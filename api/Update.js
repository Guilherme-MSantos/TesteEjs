const axios = require("axios");
const url = "http://origam-exam-api.herokuapp.com/api/posts";

let updatePost = (post, id) => {
  axios
    .patch(`${url}/${id}`, post)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      // getUsers();
    })
    .catch((error) => console.error(error));
};

module.exports = updatePost;
