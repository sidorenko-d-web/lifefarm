const Order = require("../Models/OrderModel");
const BadRequest = require('../Errors/BadRequest')

class CartController {
    async getOrder(req, res) {
        const query = req.query;
        try {
            let items
            if(query.role == 'administrator'){
                items = await Order.find().sort({timestamp: -1});
            }else{
                items = await Order.find({userId: query.userId}).sort({timestamp: -1});
            }
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

    async postOrder(req, res) {
        try {
            await Order.create(req.body)
            res.send("Order is created").status(201);
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
}

module.exports = new CartController();
