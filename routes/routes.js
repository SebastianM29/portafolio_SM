
const {Router} = require('express')
const router = Router();
const {UsuariosGet,UsuariosPost, UsuarioDelete} = require('../controllers/controllers')





router.get('/', UsuariosGet )
router.post('/user', UsuariosPost)
router.delete('/',UsuarioDelete)



module.exports = router