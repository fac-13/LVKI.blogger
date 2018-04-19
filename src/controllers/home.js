const getAllPosts = require('./../model/queries/getAllPosts');

exports.get = (req, res) => {
  getAllPosts()
    .then((queryRes) => {
      const posts = JSON.parse(JSON.stringify(queryRes));
      res.render('home', { posts });
    })
    .catch((error) => {
      console.log(error);
    });
};
