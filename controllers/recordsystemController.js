const { Recordsystem } = require('../models');

class Time {

    async findAllRecords(){
        return Recordsystem.findAll();
    }

    async newRecord(body){

        return Recordsystem.create(body);
    }

    async findByUser (userId) {
        return Recordsystem.findAll(
            {where: {userId: userId}}
        );
    }

    async findByDate(userId,date) {
        return Recordsystem.findAll(
            {where: {userId: userId,
            createdAt: date}}
        );
    }

    async deleteRecord(bodyData){
        return Recordsystem.destroy({where: {id: bodyData.id}});
    }
}

let recordsystemController = new Time();
module.exports = recordsystemController;