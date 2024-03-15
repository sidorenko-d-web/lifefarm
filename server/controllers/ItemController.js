const Item = require("../Models/ItemModel");
const BadRequest = require('../Errors/BadRequest')

class ItemController {
    async getItem(req, res) {
        const query = req.query;

        try {
            const item = await Item.findById(query.id);
            if(item === null){
                throw new BadRequest('item does not exist')
            }
            res.json(item);

        } catch (error) {
            if(error.name == 'No data found'){
                res.status(404).json(error)
            }
        }
    }

    async getAllItems(req, res) {
        const query = req.query;
        let sort, filter;
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
        switch (query.filter) {

            case 'n':
                if(query.search == '')  filter = {}
                else                    filter = {$text: {$search: query.search}}
                break;

            default:
                                        filter = {$text: {$search: query.filter}}
        }  

       try {
            const items = await Item.find(filter, {itemImage:1, title:1, cost:1}).sort(sort).skip((query.page-1)*12).limit(12)
            const count = await Item.countDocuments({})  
            
            res.json({items, count});
       } catch (error) {
            console.log(error)
       }
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

    async updateItem(req, res){
        const body = req.body
        try {
            await Item.updateOne({_id: body._id}, {$set: body})
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ItemController();
