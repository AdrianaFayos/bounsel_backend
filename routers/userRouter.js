const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

//Create new user

router.post('/', async(req, res) => {
    
    try {
        const body = req.body;
        res.json(await userController.newUser(body));

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});