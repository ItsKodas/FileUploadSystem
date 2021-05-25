/*

    * Details *

*/



//Express

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

var app = express()
app.listen('80')
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))



// App & Site

var log = require('./app/upload')
log.logThis('Hello World!')