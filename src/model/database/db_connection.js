// Makes the connection between database and js
const pgp = require('pg-promise')();

const url = require('url');
require('env2')('./.env');

if (!process.env.DATABASE_URL)
  throw new Error('Enviroment variable DATABASE_URL must be set');

const params = url.parse(process.env.DATABASE_URL);
const [username, password] = params.auth.split(':');
console.log(params.hostname);

const options = {
    host: 'localhost',
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password,
    ssl: params.hostname !== 'localhost',
  };
  
  module.exports = pgp(options);


  
