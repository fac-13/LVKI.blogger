// Makes the connection between database and js
const pgp = require('pg-promise')();

const url = require('url');
require('env2')('./.env');

let DB_URL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DATABASE_URL;
}

if (!DB_URL) throw new Error('Enviroment variable DATABASE_URL must be set');

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');

let options = {
  host: 'localhost',
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost',
};
console.log(options.password);

if (process.env.TRAVIS === 'true') {
  options = {
    database: 'travis_ci_test',
    user: 'postgres',
  };
}
module.exports = pgp(options);
