const db = require('./../database/db_connection');

const getHashPassword = username =>
  db.query('SELECT hash_password FROM users WHERE username = $1', [username]);

module.exports = getHashPassword;
