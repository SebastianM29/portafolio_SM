const Usuario = require ('../models/usuario')

const mailExist = async(mail) => {
    const findMail = await Usuario.findOne({mail});
    if (findMail) {

        throw new Error (`el correo ${mail} ya esta registrado`)


        
    }

     

}



module.exports= mailExist;