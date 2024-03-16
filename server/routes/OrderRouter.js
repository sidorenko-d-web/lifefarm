const router = require('express').Router()

const OrderController = require('../controllers/OrderController')

router.get('/getorders', OrderController.getOrder)

router.post('/createorder', OrderController.postOrder)

module.exports = router