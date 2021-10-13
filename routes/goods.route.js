const goodsController = require('../controllers/goodsController.js');
const router = require('express').Router();

router.post('/', goodsController.addGoods);

router.get('/', goodsController.calculateGoodsPrice);


module.exports = router;