const express = require('express');

const app = express();

const questionRoutes = require('./api/v1/routes/questions');
const answerRoutes = require('./api/v1/routes/answers');



app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);

module.exports = app;