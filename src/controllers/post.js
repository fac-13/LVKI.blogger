const postBlog = require('./../model/queries/postBlog');


exports.get = (req, res) => {
  const { id, title } = req.params;
  // should call a query to get post info using id
  res.render('post', { title });
};

exports.post = (req, res) => {
  // console.log(req.session);
  const { title, content } = req.body;
  const user_id = 1;
  console.log(req.body);
  postBlog(user_id, title, content)
    .then((title) => {
      res.status(201).json(title);
    })
    .catch((error) => {
      console.log(error);
    });
};

