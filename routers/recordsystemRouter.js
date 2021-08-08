const router = require('express').Router();
const recordsystemController = require('../controllers/recordsystemController');
const authenticate = require('../middleware/authenticate');

// GET All Records
router.get('/', async(req, res) => {

    try {
        res.json(await recordsystemController.findAllRecords())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});

// Record by User
router.post('/byuser', authenticate,  async(req, res) => {

    try {
        const id = req.body.userId;
        res.json(await recordsystemController.findByUser(id))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});

// Record by Date
router.post('/bydate', authenticate, async(req, res) => {

    try {
        const id = req.body.userId;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        res.json(await recordsystemController.findByDate(id,startDate,endDate))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});

// Create new record
router.post('/', async(req, res) => {

    try {
        const body = req.body;
        res.json(await recordsystemController.newRecord(body));

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

});


// Delete record 
router.delete('/', async (req, res) => {
    try {
        const bodyData = req.body;
        res.json(await recordsystemController.deleteRecord(bodyData))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;