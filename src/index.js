const app = require('./app');
const port = app.get('port');
const host = app.get('host');

app.listen(port),
  () => {
    console.log(`app is runnin on http://${host}:${port}`);
  };
