const express = require('express');

const bodyParser = require('body-parser');
const loginRoute= require('./routes/login');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoute);

app.listen(4000);