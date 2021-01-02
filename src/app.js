const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const helmet = require('helmet')
var path = require('path')

var dir = path.join(__dirname, 'public')

const routes = require('./routes')
const app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// var jsonencodedParser = bodyParser.json();
// app.use(jsonencodedParser);
// app.use(helmet.noCache());

app.use(cors())
app.use(urlencodedParser)
app.use(express.static(dir))
app.use(helmet());
app.use(routes)

app.listen(5000)