const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const connection = require('./database');


app.get('/',function(req, res, next) {
    connection.query('SELECT * FROM datas;',function(error, results, fields) {
        if (error) throw error;
          res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));


const PORT = process.env.PORT || 80;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});