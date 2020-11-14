const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/public/')));
app.set("view engine","ejs");
app.set('views', path.join(__dirname, '/views/'));


app.get('/',function(req, res, next) {
  connection.query('SELECT * FROM courses;',function(error, results, fields) {
      if (error) throw error;
      res.render("index",{courses:results});
    }
  );
});

app.get('/addCourse',function(req, res) {
  res.render("addCourse");
});

app.post("/addCourse",function(req,res){

  var name = req.body.name;
  var content = req.body.content;
  var img = req.body.img;
  var newCourse = {name:name,content:content,img:img};

  connection.query('INSERT INTO courses SET ?', newCourse, function (error, results, fields) {
    if (error) throw error;
    res.redirect("/");
  });

});

app.get('/deleteCourse/:id', function (req, res) {
  const { id } = req.params;

  connection.query('DELETE FROM courses WHERE id = ?', id, function (error, results, fields) {
      if (error) throw error;
      res.redirect("/");
  });
});

app.get('/status', (req, res) => res.send('Working!'));

const PORT = process.env.PORT || 80;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});