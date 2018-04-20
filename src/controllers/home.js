const getAllPosts = require('./../model/queries/getAllPosts');

exports.get = (req, res) => {
  const { username, loggedIn } = req.session;
  getAllPosts()
    .then((posts) => {
      if (req.session.length > 0) {
        res.render('home', { posts, username, loggedIn });
      } else {
        res.render('home', { posts });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
