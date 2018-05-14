const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');



const users = require('./routes/users');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}))



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/swiper');
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoDB')
});

app.use('/users', users);

app.get('/', (req, res)=>{
  res.render('index', {title:'Gold Match', condition: false, anyArray: [1,2,3]})
})

app.listen(PORT, ()=>{
  console.log(`Swiper is swiping on ${PORT}`)
})
