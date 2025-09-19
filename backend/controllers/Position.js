const {PositionModel} = require("../models/PositionModel");

module.exports.Position = async (req, res) => {
    let tempPosition =  [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
        },
    ];

    try {
        tempPosition.forEach((position) => {
            let currentPosition = new PositionModel({
                product: position.product,
                name: position.name,
                qty: position.qty,
                avg: position.avg,
                price: position.price,
                net: position.net,
                day: position.day,
                isLoss: position.isLoss,
            });

            currentPosition.save()
        })
    } catch (error) {
        console.log(error);
    }

    res.send(JSON.stringify(tempPosition));
}