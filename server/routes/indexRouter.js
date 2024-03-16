const router = require('express').Router()

const ItemRouter = require('./ItemRouter')
const UserRouter = require('./UserRouter')
const CartRouter = require('./CartRouter')
const OrderRouter = require('./OrderRouter')

router.use(ItemRouter)
router.use(UserRouter)
router.use(CartRouter)
router.use(OrderRouter)

module.exports = router