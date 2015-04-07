'use strict';

var express = require('express');
var router = express.Router();

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var join = require('path').join;
var shortid = require('shortid');
var fs = require('../lib/fs');
var books = generateBooks(join(__dirname, '../books'));

function generateBooks(dir) {
  return fs.readFiles(dir)
    .map(function parseJSON(content) {
      return JSON.parse(content);
    })
    .map(function addId(book) {
      book.id = shortid.generate();
      return book;
    })
    .map(function initTOC(book) {
      book.toc = initCompletedState(book.toc);
      return book;
    });
}

/**
 * Initialize completed state of chapters/sections recursively.
 *
 * @param  {Array} parents Array of chapters and sections
 * @return {Array}
 */
function initCompletedState(parents) {
  for (var i = 0; i < parents.length; i++) {
    var parent = parents[i];
    parent.completed = false;
    if (parent.children) {
      parent.children = initCompletedState(parent.children);
    }
  }
  return parents;
}

function findBookById(id) {
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    if (book.id === id) {
      return book;
    }
  }
  return null;
}

// GET

router.get('/books', function(req, res) {
  res.json(books);
});

router.get('/books/:id', function(req, res) {
  var id = req.params.id;
  var book = findBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.json(false);
  }
});

// PUT

router.put('/books/:id', function(req, res) {
  var index = null;
  var id = req.params.id;
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    if (book.id === id) {
      index = i;
    }
  }
  if (index === null) {
    return res.json(false);
  }
  books[index] = req.body;
  res.json(true);
});

module.exports = router;
