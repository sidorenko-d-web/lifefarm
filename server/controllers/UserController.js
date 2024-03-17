const User = require("../Models/UserModel");
const BadRequest = require('../Errors/BadRequest')

class UserController {
    async getUserName(req, res){
        const query = req.query;
        try {
            const fio = await User.findById(query.userId, {fio: 1})
            res.json(fio)
        } catch (error) {
            console.log(error)
        }
    }

    async getUser(req, res) {
        const query = req.query;
        try {
            const user = await User.findOne({email: query.email});

            if(user === null){
                const res = await User.find()
                console.log(res)
                throw new BadRequest('user does not exist')
            }

            if(query.pass === user.pass){
                res.setHeader('Authorization', user.role === 'administrator'?'administrator':'user')

                res.json({access: true, user}).status(201)
            }else{
                res.json({access: false , msg: 'icp'});
            }

        } catch (error) {
            if(error.name == 'No data found'){
                console.log(error)
                res.json({access: false, msg: 'und'})
            }
            else{
                console.log(error)
            }
        }
    }

    async postUser(req, res) {
        console.log('a')
        try {
            const ress = await User.create(req.body)
            console.log(ress)
            res.send("user registered").status(201);
        } catch (error) {
            console.log(error)
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
}

module.exports = new UserController();
