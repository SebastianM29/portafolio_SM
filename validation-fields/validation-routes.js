const { validationResult } = require('express-validator');
const{request,response} = require('express');


const validationFields =(req=request,res=response,next) => {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
  
      console.log(errors)
      return res.render('index')

        
     
    } 

    next();

}



module.exports=validationFields