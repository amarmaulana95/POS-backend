const express = require('express');
const auth = require('../helpers/auth');

const router = express.Router();
const cartController = require('../controllers/cart');
const checkoutControler = require('../controllers/checkout');

router.get('/', auth.verify, cartController.getAllCart);

router.post('/', auth.verify, cartController.addToCart); //add to cart

router.patch('/add/:id_cart', cartController.addQty);
router.patch('/min/:id_cart',  cartController.minQty);
router.delete('/', auth.verify, cartController.deleteCart);

router.delete('/all', auth.verify, cartController.deleteAllCart);

router.get('/qty', auth.verify, cartController.getQty);

//checkout
router.post('/checkout', auth.verify, checkoutControler.checkoutAll);
router.get('/checkout/:id_cart/:id_user', auth.verify, checkoutControler.checkoutById);


module.exports = router;