const express = require('express');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);

module.exports = app;