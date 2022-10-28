const axios = require("axios");
const url = "http://origam-exam-api.herokuapp.com/api/posts";

let deletePost = (id) => {
  axios
    .delete(`${url}/${id}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      //  getUsers();
    })
    .catch((error) => console.error(error));
};

module.exports = deletePost;
