const router = require('express').Router()

const CartController = require('../controllers/CartController')

router.get('/getcartitems', CartController.getCartItems)

router.post('/creatcartitem', CartController.postCartItem)

router.delete('/deletecartitem', CartController.deleteCartItem)

router.delete('/clearcart', CartController.clearCart)

module.exports = router