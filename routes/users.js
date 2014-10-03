var express = require('express');
var router = express.Router();

function foo() {
  var fs = require('fs');
  var join = require('path').join;
  var booksDir = join(__dirname, '../books');
  var books = fs.readdirSync(booksDir);
  var data = [];
  for (var i = 0; i < books.length; i++) {
    var content = fs.readFileSync(join(booksDir, books[i]), 'utf8');
    data.push(JSON.parse(content));
  }
  return data;
}

/* GET users listing. */
router.get('/books', function(req, res) {
  var books = foo();
  res.send(books);
});

module.exports = router;
