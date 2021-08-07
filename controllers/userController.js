const { User } = require('../models');
const bcrypt = require('bcrypt');

class Client {

async newUser(body){
        
    let password = body.password;
    let passwordHashed = bcrypt.hashSync(password, 10);
    body.password = passwordHashed;
    return User.create(body);
}

}

let userController = new Client();
module.exports = userController;