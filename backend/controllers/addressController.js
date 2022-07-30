const Address = require("../models/Address");

const addressController = {
    //GET ALL ADDRESS
    getAllAddress: async(req, res)=>{
        try {
            const address = await Address.find();
            res.status(200).json(address);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = addressController;