const { validationResult } = require('express-validator');
const{request,response} = require('express');


const validationFields =(req=request,res=response,next) => {
    
    const errors = validationResult(req)
    
    
  
    if (!errors.isEmpty()) {
  
      //console.log(req.body)
      //console.log(errors.array())
      const validaciones = errors.array();
      const value = req.body;
      return res.render('index',{validaciones:validaciones,value:value})

        
     
    } 

    next();

}



module.exports=validationFields