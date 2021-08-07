const { User } = require('../models');
const bcrypt = require('bcrypt');

class Client {

    async findAllUsers(){
        return User.findAll();
    }

    async findUser (id) {
        return User.findOne(
            {where: {id: id}}
        );
    }

    async newUser(body){
        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return User.create(body);
    }

    async modifyUser(bodyData){
        let user = await User.update(
            //Datos que cambiamos..
            {name: bodyData.name, 
            lastname: bodyData.lastname,
            email: bodyData.email},
            //Donde...
            {where: {id: bodyData.userId}})

        return User.findOne({
            where: {id : bodyData.userId}
        });
    }

    async deleteUser(bodyData){
        return User.destroy({where: {id: bodyData.userId}});
    }

    async userEmail(email){

        return User.findOne({
            where: {email}
        });
    }


}

let userController = new Client();
module.exports = userController;