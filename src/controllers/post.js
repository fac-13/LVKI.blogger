const postBlog = require('./../model/queries/postBlog');
const getUserId = require('../model/queries/getUserId');


exports.get = (req, res) => {
  const { id, title } = req.params;
  // should call a query to get post info using id
  res.render('post', { title });
};

exports.post = (req, res) => {
  // console.log(req.session);
  const { title, content } = req.body;
  // console.log('post headers', Object.keys(req.headers));

  if (req.session.username) {
    console.log('we have a cookie', req.session);
    const { username } = req.session;

    getUserId(username)
      .then((res) => {
        const userId = res[0].id;
        console.log('userId', userId);
        return postBlog(userId, title, content);
      })
      .then((title) => {
        res.status(201).json(title);
      })
      .catch((error) => {
        console.log();
        console.log('error adding a post', error);
      });
  } else {
    res.status(401).send('Sorry you cant add a post right now');
  }
};

