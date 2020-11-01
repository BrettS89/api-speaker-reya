const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
require('dotenv').config();
require('./connections/index');

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.use(helmet());

module.exports = app;
