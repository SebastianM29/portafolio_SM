const mongoose = require('mongoose');
//require('dotenv').config({path:'../../.env'})
const obj = require('../config/index')




const dbConection = async() => {

    try {

        await mongoose.connect(obj.MongoDB,{
            useNewUrlParser:true ,
            useUnifiedTopology:true

        })
        console.log('Base de datos conectada')
        
    } catch (error) {
        console.log(error)
        throw new Error('error en la conexion a la base de datos')
        
    }
}



module.exports = dbConection