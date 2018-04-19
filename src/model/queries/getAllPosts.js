const db = require('./../database/db_connection');

const getAllPosts = () => db.query('SELECT * FROM posts');

module.exports = getAllPosts;
