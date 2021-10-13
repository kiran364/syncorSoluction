const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    HSNcode : {
        type: Number,
        require: true
    },
    DescOfGoods: {
        type: String
    },
    RODTEPrate: {
        type: String
    },
    UQC: {
        type: String
    },
    CapPerUQC: {
        type: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('Goods', goodsSchema);