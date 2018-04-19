const bcrypt = require('bcryptjs');
const userSignUp = require('./../model/queries/userSignUp');

exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  const userDetails = req.body; //use destructuring
  bcrypt
    .hash(userDetails.password, 10)
    .then(hash => userSignUp(userDetails.username, hash))
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
};
