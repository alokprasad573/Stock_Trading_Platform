const { HoldingsModel } = require("../models/HoldingsModel")
const { PositionModel } = require("../models/PositionModel")

module.exports.allHoldings = async (req, res) => {
    try {
        let holdings = await HoldingsModel.find({})
        res.json(holdings)
    } catch (error) {
        console.log(error)
    }
}

module.exports.allPositions = async (req, res) => {
    try {
        let positions = await PositionModel.find({})
        res.json(positions)
    } catch (error) {
        console.log(error)
    }
}