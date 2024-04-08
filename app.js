const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { dbConnect } = require('./dbConnect');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to mongodb database
dbConnect();

app.use(bodyParser.json());

// user api routes
app.use('/api/users', userRoutes);

// product api routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World Aneri Assignment 4!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Assignment 4 running on port http://localhost:${PORT}/`);
});
