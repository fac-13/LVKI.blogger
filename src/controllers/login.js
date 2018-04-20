const userLogIn = require('../model/queries/userLogIn');
const bcrypt = require('bcryptjs');

exports.get = (req, res) => {
  res.render('login');
};

exports.post = (req, res) => {
  console.log('req', req.body);
  const { username, password } = req.body;

  userLogIn(username)
    .then((queryRes) => {
      console.log(queryRes);
      const hash = queryRes[0].hash_password;
      return bcrypt.compare(password, hash);
    })
    .then((verified) => {
      if (verified) {
        // issue cookie
        console.log('verified:', verified);
        req.session.username = username;
        req.session.loggedIn = true;
        res.redirect('/');
      } else {
        // send error message
        res.send('Access DENIED');
      }
    })
    .catch((error) => {
      res.status(401).send('Login Failed');
    });
};
