const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const { dbConnect } = require('./dbConnect');

const app = express();

// Connect to mongodb database
dbConnect();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World Aneri Assignment 4!');
});

const PORT = process.env.PORT;

app.listen(3000, () => {
  console.log(`Assignment 4 running on port http://localhost:${PORT}/`);
});
