const router = require('express').Router();
const userController = require('../controllers/userController');
// const authenticate = require('../middleware/authenticate');

// GET All Users
router.get('/', async(req, res) => {

    try {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});

// GET user profile
router.post('/profile',  async(req, res) => {

    try {
        const id = req.body.userId;
        res.json(await userController.findUser(id))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});

// Create new user
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

// UPDATE User
router.put('/', async (req,res) => {

    try{
        const bodyData = req.body;
        res.json(await userController.modifyUser(bodyData)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

})

// Delete user 
router.delete('/', async (req, res) => {
    try {
        const bodyData = req.body;
        res.json(await userController.deleteUser(bodyData))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;