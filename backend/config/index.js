
require('dotenv').config({path:'../../.env'})




const obj = { 
    MongoDB : process.env.MONGODB_CNN,
    port : process.env.PORT
}






module.exports=obj