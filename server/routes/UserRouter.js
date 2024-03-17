const router = require('express').Router()

const UserController = require('../controllers/UserController')

router.get('/getusername', UserController.getUserName)

router.get('/getuser', UserController.getUser)

router.post('/createuser', UserController.postUser)

module.exports = router