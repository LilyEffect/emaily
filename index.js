const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/auth')(app);

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`App started on port ${port}`);

module.exports = app;
