const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { dbConnect } = require('./dbConnect');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to mongodb database
dbConnect();

app.use(bodyParser.json());

// user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World Aneri Assignment 4!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Assignment 4 running on port http://localhost:${PORT}/`);
});
