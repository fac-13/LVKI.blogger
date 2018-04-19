const test = require('tape');
const getAllPosts = require('./../model/queries/getAllPosts');
const postBlog = require('./../model/queries/postBlog');
const userSignUp = require('./../model/queries/userSignUp');
const runDbBuild = require('./../model/database/db_build');

test('Test if tape is working', (t) => {
  t.ok(true, 'tape is working');
  t.end();
});

test('Test userSignUp inserts data into db', (t) => {
  runDbBuild().then((buildRes) => {
    userSignUp('hello', 'world').then((res) => {
      t.equal(res[0].username, 'hello', 'should match entry');
      t.end();
    });
  });
});

test('Test postBlog inserts data into db', (t) => {
  postBlog(1, 'hello', 'world').then((res) => {
    t.equal(res[0].title, 'hello', 'should match entry');
    t.end();
  });
});

test('Test getAllPosts returns a promise', (t) => {
  const actual = getAllPosts();
  t.equal(typeof actual, 'object', 'should be an object');
  t.end();
});

test('Test getAllPosts returns a promise with an array', (t) => {
  getAllPosts().then((res) => {
    const actual = res;
    t.equal(Array.isArray(actual), true, 'should be an array');
    t.end();
  });
});

test('Test getAllPosts returns a promise with an array of objects', (t) => {
  getAllPosts().then((res) => {
    t.equal(res[0].title, 'hello', 'should match entry');
    t.end();
  });
});
