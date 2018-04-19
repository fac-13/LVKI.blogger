const bcrypt = require('bcryptjs');
const userSignUp = require('./../model/queries/userSignUp');

exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  const { password, username } = req.body;
  bcrypt
    .hash(password, 10)
    .then(hash => userSignUp(username, hash))
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
};
