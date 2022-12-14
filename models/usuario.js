const{Schema,model}=require('mongoose');

const UsuarioSchema = ({
    nombre:{
        type:String,
        required:[true]
    },
    mensaje:{
        type:String,
        required:[true]
    },
    mail:{
        type:String,
        required:[true],
       
    }
   
})

module.exports= model('Usuario' , UsuarioSchema )