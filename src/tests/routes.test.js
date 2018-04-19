const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');

// / 'home' route
test('Test if supertest is working', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'status should be 200');
      t.end();
    });
});

test('Test if home route returns html', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'content type should be html');
      t.end();
    });
});

// /post/:id/:title route
test('Test if post route is working', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect(200)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'status should be 200');
      t.end();
    });
});

test('Test if post route returns a html content-type', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'content type should be html');
      t.end();
    });
});

test('Test if post route returns html as a string', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.equal(typeof res.text, 'string', 'res text should be a string');
      t.end();
    });
});

test('Test if post route returns html with post title', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res.text.includes('hello'));
      t.end();
    });
});

test('Test if post route returns html with post title', (t) => {
  request(app)
    .get('/post/1/bye')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res.text.includes('bye'));
      t.end();
    });
});

// GET /login - need to send data in request!
// test.skip('Test if login GET route is working', (t) => {
//   request(app)
//     .get('/login')
//     .expect(200)
//     .end((err, res) => {
//       t.ok(res.text.includes('form'), 'login page has a form');
//       t.error(err, 'status should be 200');
//       t.end();
//     });
// });

// POST /login
// test('Test if login POST route is working', (t) => {
//   request(app)
//     .post('/login')
//     .expect(302)
//     .end((err, res) => {
//       // t.ok(res.text.includes('form'), 'login page has a form');
//       t.error(err, 'status should be 302');
//       t.end();
//     });
// });

// GET /signup
test('Test if login GET route is working', (t) => {
  request(app)
    .get('/login')
    .expect(200)
    .end((err, res) => {
      t.ok(res.text.includes('form'), 'login page has a form');
      t.error(err, 'status should be 200');
      t.end();
    });
});

// POST /signup
// test('Test if signup POST route is working', (t) => {
//   request(app)
//     .post('/login')
//     .expect(302)
//     .end((err, res) => {
//       // t.ok(res.text.includes('form'), 'login page has a form');
//       t.error(err, 'status should be 302');
//       t.end();
//     });
// });

// POST /post
test('Test if POST /post route receives new blog post form data', (t) => {
  request(app)
    .post('/post')
    .send({
      user_id: 1,
      title: 'title!',
      content: 'content!',
    })
    .expect(201)
    .end((err, res) => {
      t.error(err, 'status is 201');
      t.end();
    });
});


// 404 error
test('Test if bad route is 404', (t) => {
  request(app)
    .get('/akjkl')
    .expect(404)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'status should be 404');
      t.end();
    });
});

test('Test if bad route returns html with error message', (t) => {
  request(app)
    .get('/jkask')
    .expect(404)
    .end((err, res) => {
      t.ok(res.text.includes('Page not found'));
      t.end();
    });
});
