
const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
const {UsuariosGet,UsuariosPost, UsuarioDelete} = require('../controllers/controllers');
const validationFields = require('../validation-fields/validation-routes');





router.get('/', UsuariosGet )
router.post('/user',
[check('nombre','Por favor ingrese el nombre').not().isEmpty(),
validationFields
],UsuariosPost)
router.delete('/',UsuarioDelete)



module.exports = router