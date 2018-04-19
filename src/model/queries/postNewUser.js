const db = require('./../database/db_connection');

const getAllPosts = () => db.query('SELECT users.username, posts.title, posts.content, posts.posted_at FROM posts INNER JOIN users ON users.id=posts.user_id');

module.exports = getAllPosts;