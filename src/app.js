const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const helmet = require('helmet')

const routes = require('./routes')
const app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(urlencodedParser)
app.use(helmet());
// app.use(helmet.noCache());
app.use(routes)

app.listen(5000)