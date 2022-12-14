const { validationResult } = require('express-validator');
const{request,response} = require('express');


const validationFields =(req=request,res=response,next) => {
    
    const errors = validationResult(req)
    
    
    /*if (errors instanceof MongoServerError && errors.code === 11000 ) {
      return res.render('index')
    }*/
    if (!errors.isEmpty()) {
  
      console.log(errors)
      return res.render('index')

        
     
    } 

    next();

}



module.exports=validationFields