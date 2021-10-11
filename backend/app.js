const express = require('express'); 
const app = express(); 

const cookieParser = require('cookie-parser')

const morgan = require('morgan') 

const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(morgan('dev'));
app.unsubscribe(cookieParser())

//import all routes
const products = require('./routes/product');
//const auth = require('./routes/auth');
const order = require('./routes/order');

app.use(express.static('public')) //diarahin ke folder hasil build

app.use('/test', (req, res) => {
    res.send('storeweb')
})

app.use('/api/v1', products)
//app.use('/api/v1', auth)
app.use('/api/v1', order)

// middle errors
app.use(errorMiddleware);


module.exports = app 




