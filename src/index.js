const app = require('./app');

const port= app.get('port')

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
