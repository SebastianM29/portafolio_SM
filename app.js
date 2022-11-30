require('dotenv').config({path:'../.env'})
const Server = require('./models/server');



server = new Server();
server.listen();



