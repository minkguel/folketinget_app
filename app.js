const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const personRoutes = require('./routes/personRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', personRoutes);



mongoose.connect('mongodb://127.0.0.1:27017/Folketinget')
    .then(() => console.log('Connected to the database'))
    .catch(error => console.error('Failed to connect to the database'));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});