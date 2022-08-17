const path = require('path')

const express = require('express');

const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
  );

app.set('port' , process.env.PORT || 3000);

module.exports = app;