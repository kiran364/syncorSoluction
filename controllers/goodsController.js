const Goods = require('../models/goodsModel');

exports.addGoods = async (req, res) => {
    try{
        const {HSNcode , DescOfGoods, RODTEPrate, UQC, CapPerUQC } = req.body;
        const newGoods = new Goods({
            HSNcode, 
            DescOfGoods, 
            RODTEPrate, 
            UQC, 
            CapPerUQC
        })

        const saveGoods = await newGoods.save();
        res.status(201).json(saveGoods)

    }catch (err) {
        res.status(404).send(err)
    }
}

exports.calculateGoodsPrice = async (req, res) => {
    try{
        const {HSNcode, Volume} = req.body;
        const goodsData = await Goods.findOne({HSNcode: HSNcode});
        console.log(goodsData);
    }catch(err){
        res.status(404).send(err) 
    }
}