const Cart = require("../Models/CartModel");
const BadRequest = require('../Errors/BadRequest')

class CartController {
    async getCartItems(req, res) {
        const query = req.query;
        try {
            const items = await Cart.find({userId: query.userId}).sort({timestamp: -1});
            if(items === null){
                throw new BadRequest('user does not exist')
            }

            res.json(items)

        } catch (error) {
            if(error.name == 'No data found'){
                res.json({access: false, msg: 'no data'})
            }
            else{
                console.log(error)
            }
        }
    }

    async postCartItem(req, res) {
        try {
            await Cart.create(req.body)
            res.send("Item added to Cart").status(201);
        } catch (error) {
            if (error.name === "ValidationError") {
                let errors = {};

                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                });

                return res.send(errors).status(400);
            }
            console.log(error)
            res.status(500).send("Something went wrong");
        }
    }

    async deleteCartItem(req, res) {
        const query = req.query
        try {
            await Cart.deleteOne({itemId: query.id})
        } catch (error) {
            console.log(error)
        }
    }

    async clearCart(req, res) {
        const query = req.query

        try {
            await Cart.deleteMany({userId: query.userId})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CartController();
