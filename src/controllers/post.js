const postBlog = require('./../model/queries/postBlog');
const getUserId = require('../model/queries/getUserId');


exports.get = (req, res) => {
  const { id, title } = req.params;
  // should call a query to get post info using id
  res.render('post', { title });
};

exports.post = (req, res) => {
  const { title, content } = req.body;
  // console.log('post headers', Object.keys(req.headers));
  if (req.session.username) {
    const { username } = req.session;
    getUserId(username)
      .then((res) => {
        const { id } = res[0];
        return postBlog(id, title, content);
      })
      .then(postTitle => res.status(201).json(postTitle))
      .catch((error) => {
        console.log('error adding a post', error);
      });
  } else {
    res.status(401).send('Sorry you cant add a post right now');
  }
};

