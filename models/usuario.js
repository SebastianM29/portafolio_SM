const{Schema,model}=require('mongoose');

const UsuarioSchema = {
    nombre:{
        type:String,
        required:[true,'Ingrese Nombre']
    },
    mail:{
        type:String,
        required:[true,'Ingrese correo electronico'],
        unique:true
    },
    mensaje:{
        type:String,
        required:[true,'Deje su mensaje']
    }
}

module.exports= model('Usuario' , UsuarioSchema )