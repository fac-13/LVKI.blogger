const db = require('./../database/db_connection');

const userLogIn = username => db.query('SELECT hash_password FROM users WHERE username = $1', [username]);


module.exports = userLogIn;

