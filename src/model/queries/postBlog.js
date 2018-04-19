const db = require('./../database/db_connection');

const postBlog = (userId, title, content) =>
  db.query(
    'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING title',
    [userId, title, content],
  );

module.exports = postBlog;
