const { OrderModel } = require("../models/OrderModel");


module.exports.newOrder = async (req, res) => {
    let { name, qty, price, mode } = req.body;
    let newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();
    res.json(newOrder);
}