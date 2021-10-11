const app = require('./app')  
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

console.log('start')

//setting config
dotenv.config({ path: 'config/config.env'})


//connecting db
connectDatabase();

const server = app.listen(process.env.PORT, () => { 
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
}) 


// Handle error full
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutdown uncaught exception');
    process.exit(1)
})


// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})


