const Item = require("../Models/ItemModel");

class ItemController {
    async getItem(req, res) {
        const query = req.query;

        class BadRequest {
            constructor(message) {
                this.name = 'Bad request';
                this.message = message;
            }
        }

        try {
            const item = await Item.findById(query.id);
            if(item === null){
                throw new BadRequest('item does not exist')
            }
            res.json(item);

        } catch (error) {
            if(error.name == 'Bad request'){
                res.status(404).json(error)
            }
        }
    }

    async getAllItems(req, res) {
        const query = req.query;
        let items, count, sort;
        switch (query.sort) {
            case 'cost':
                sort = {cost: 1}
                break;
            case 'title':
                sort = {title: 1}
                break;
            case 'avalibility':
                sort = {avalibility: -1}
                break;
        }

        if (query.purpose) {
            items = await Item.find({ purpose: query.purpose }).sort(
                query.sort
            );
            count = await Item.countDocuments({ purpose: query.purpose })    
        } else {
            items = await Item.find({}, {itemImage:1, title:1, cost:1}).sort(sort).skip((query.page-1)*12).limit(12)
            count = await Item.countDocuments({})  
        }
        res.json({items, count});
    }

    async postItem(req, res) {
        try {
            await Item.create(req.body)
            res.send("item created").status(201);
        } catch (error) {
            if (error.name === "ValidationError") {
                let errors = {};

                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                });

                return res.send(errors).status(400);
            }
            res.status(500).send("Something went wrong");
        }
    }

    async deleteItem(req, res){
        try {
            const query = req.query
            await Item.deleteOne({_id: query.id})
            res.send('item deleted')

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ItemController();
