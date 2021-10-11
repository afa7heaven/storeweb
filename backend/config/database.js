
const mongoose = require('mongoose');

const connectDatabase = () => {
     mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
     }).then(con =>{
         console.log(`database host: ${con.connection.host}`);
     }).catch((err) => {
         console.log(`error db`);
     })
}


module.exports = connectDatabase