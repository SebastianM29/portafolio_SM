const express = require('express')
const cors = require('cors');
const dbConection = require('../database/config');
const obj = require('../config/index')
const morgan = require('morgan')


class Server {

    constructor (){
    this.app=express()
    this.port= obj.port

  


    //middlewares: Cors,servir contenido estatico,parseo json

    this.middlewares();
    //rutas de mi aplicacion

    
    this.routes()

    this.conectarDB()



    }


    async conectarDB () {
    
     await dbConection()

    }






    listen(){
  
          
          this.app.listen(this.port,()=>{
            console.log(`Usted corre en el puerto ${this.port}`)
           
          })

    }

    middlewares(){

      this.app.use(cors());
      this.app.use(morgan('dev'))
      this.app.use(express.json());
      this.app.use(express.static('public'))
      this.app.use(express.urlencoded({extended:false}))
     
    }


    routes() {

      this.app.use('/',require('./../routes/routes'))

    }

}


module.exports = Server