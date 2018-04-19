exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  res.redirect('/');
};
