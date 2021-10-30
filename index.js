const express = require('express');
const app = express();
const cors = require('cors');
var morgan = require('morgan');
app.use(express.json({
    limit: '1000mb'
}))

app.use(express.urlencoded({
    extended: false
}))

app.use(cors({
    exposedHeaders: ["Link"]
}));

app.use(morgan('tiny'));

app.listen(3000, 'localhost');

console.log(`Started on port 3000`);