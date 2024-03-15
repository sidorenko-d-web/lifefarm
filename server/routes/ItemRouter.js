const router = require('express').Router()

const ItemController = require('../controllers/ItemController') 

router.get('/getitem', ItemController.getItem)

router.get('/getallitems', ItemController.getAllItems)

router.delete('/deleteitem', ItemController.deleteItem)

router.post('/createitem', ItemController.postItem) 

module.exports = router