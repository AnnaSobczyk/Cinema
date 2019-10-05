const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const routes = require('./routes/index');

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
    app.use(logger('dev'));
}

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use('/api', routes(router));

app.listen(process.env.API_PORT, () => console.log(`Listening on port ${process.env.API_PORT}`));
