const router = require('express').Router();

const userRouter = require('./routers/userRouter')
const recordsystemRouter = require('./routers/recordsystemRouter')
const loginRouter = require('./routers/loginRouter')

router.use('/users', userRouter);
router.use('/recordsystem', recordsystemRouter);
router.use('/login', loginRouter);


module.exports = router;