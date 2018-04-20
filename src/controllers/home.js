const getAllPosts = require('./../model/queries/getAllPosts');

exports.get = (req, res) => {
  if (req.session.length > 0) {
    const { username, loggedIn } = req.session;
    getAllPosts()
      .then((queryRes) => {
        const posts = JSON.parse(JSON.stringify(queryRes));
        res.render('home', { posts, username, loggedIn });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    getAllPosts()
      .then((queryRes) => {
        const posts = JSON.parse(JSON.stringify(queryRes));
        res.render('home', { posts });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
