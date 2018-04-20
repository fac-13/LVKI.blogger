const db = require('./../database/db_connection');

const getUserId = username => db.query('SELECT id FROM users WHERE username = $1', [username]);

module.exports = getUserId;
