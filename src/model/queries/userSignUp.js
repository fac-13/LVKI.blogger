const db = require('./../database/db_connection');

const userSignUp = (username, hashPassword) =>
  db.query(
    'INSERT INTO users (username, hash_password) VALUES ($1, $2) RETURNING username, id AS user_id',
    [username, hashPassword],
  );

module.exports = userSignUp;
