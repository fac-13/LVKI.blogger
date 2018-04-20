const getHashPassword = require('../model/queries/getHashPassword');
const bcrypt = require('bcryptjs');

exports.get = (req, res) => {
  res.render('login');
};

exports.post = (req, res) => {
  const { username, password } = req.body;

  getHashPassword(username)
    .then((queryRes) => {
      if (queryRes.length === 0) throw new Error('User does not exist');
      const hash = queryRes[0].hash_password;
      return bcrypt.compare(password, hash);
    })
    .then((verified) => {
      if (!verified) throw new Error('Password is incorrect');
      // issue cookie
      req.session.username = username;
      req.session.loggedIn = true;
      res.redirect('/');
    })
    .catch((error) => {
      res.render('login', {
        errorMessage: error.message,
      });
    });
};
