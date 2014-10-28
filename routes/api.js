'use strict';

var express = require('express');
var router = express.Router();

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {};
var fs = require('fs');
var join = require('path').join;
var booksDir = join(__dirname, '../books');
var books = fs.readdirSync(booksDir);
data.books = [];
for (var i = 0; i < books.length; i++) {
  var content = fs.readFileSync(join(booksDir, books[i]), 'utf8');
  data.books.push(JSON.parse(content));
}

// GET

router.get('/books', function(req, res) {
  res.json(data);
});

router.get('/book', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.books.length) {
    res.json({
      book: data.books[id]
    });
  } else {
    res.json(false);
  }
});

module.exports = router;
