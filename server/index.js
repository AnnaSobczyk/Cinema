const express = require('express');
const logger = require('morgan');
const mongoose = require('./database');

const app = express();
app.use(logger('dev'));

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
