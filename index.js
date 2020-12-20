const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');

// Load the .env file configuration.
require('dotenv').config();

// Setup an instance of our APP.
const app = express();
const port = process.env.PORT || 3000;

// Connect to the MongoDB Database.
mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

// Mongoose Promise is now deprecated, so we override with node's promise.
mongoose.Promise = global.Promise;

// This is to prevent issues during development that we may face when accessing the API from different domains.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

// Setup the APP to listen on the port.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
