const router = require('express').Router();

const controllers = require("../controllers");
router.get('/products', controllers.product.get);

module.exports = router;