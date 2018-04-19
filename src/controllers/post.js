exports.get = (req, res) => {
  const { id, title } = req.params;
  // should call a query to get post info using id
  res.render('post', { title });
};

exports.post = (req, res) => {
  const newPostData = req.body;
  console.log(newPostData);
}
;