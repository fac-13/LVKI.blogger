const bcrypt = require('bcryptjs');
const userSignUp = require('./../model/queries/userSignUp');

exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  const username = req.body.username.toLowerCase();
  const { password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.render('signup', {
      errorMessage: 'Passwords do not match',
    });
  } else {
    bcrypt
      .hash(password, 10)
      .then(hash => userSignUp(username, hash))
      .then(() => {
        res.redirect('/');
      })
      .catch(() => {
        res.render('signup', {
          errorMessage: `Username ${username} already exists`,
        });
      });
  }
};
