// Express
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const _ = require('lodash');

var app = express()
app.listen('80')
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(fileUpload({
    createParentPath: true
}));

app.use('/uploads', express.static('uploads', ))



// MongoDB connection
/*mongoose.connect('mongodb://127.0.0.1:27017/uploader', {
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);*/



// App & Site
require('./app/upload')(app)