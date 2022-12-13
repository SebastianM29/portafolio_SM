const e = require('express');
const {request,response} = require('express');
const Usuario = require('../models/usuario');


const UsuariosGet = (req=request, res=response) => {
  res.render('index')  
}

const UsuariosPost =async (req=request, res=response) => {

  
 

   console.log(req.body)
  let body = req.body
  const usuario = new Usuario(body)

  
  
  
  await usuario.save();
  
  res.redirect('/')
  document.getElementById("envio-datos").addEventListener("click", function(event) {
    event.preventDefault();
  });
  
   

}

const UsuarioDelete = (req=request, res=response) => {
  res.json({
    msg: 'delete'
  })
}

/*const UsuariosDelete = (req=request, res=response) => {
    res.send('Hello World from here')
  
}*/





module.exports ={
  UsuariosGet,
  UsuariosPost,
  UsuarioDelete
}
