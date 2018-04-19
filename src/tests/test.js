const test = require('tape');
const getAllPosts = require('./../model/queries/getAllPosts');
const postBlog = require('./../model/queries/postBlog');

test('Test if tape is working', (t) => {
  t.ok(true, 'tape is working');
  t.end();
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
  });
  t.end();
});

test('Test getAllPosts returns a promise with an array of objects', (t) => {
  postBlog('title', 'content', 1);
  getAllPosts().then((res) => {
    console.log(res);
    const actual = res;
    t.equal(typeof actual, 'object', 'should be an object');
  });
  t.end();
});
