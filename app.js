const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

// Use BodyParser
app.use(bodyParser.json());

// Import Routes
const carRoutes = require('./api/routes/cars');

app.use('/cars', carRoutes);


// Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => console.log('connect to db')

)
module.exports = app;