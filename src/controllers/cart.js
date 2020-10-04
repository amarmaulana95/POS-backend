const cartModel = require('../models/cart');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getAllCart: (req, res) => {
        cartModel.getAllCart()
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err))
    },
    addQty: (req, res) => {
        const id_cart = req.params.id_cart;
        const qty = 1;
        cartModel.addQty(qty, id_cart)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },

    addToCart: (req, res) => {
        const { id_user, id_product, qty,name,image,price } = req.body;
        const date_add = new Date();
        const data = {
            id_user,
            id_product,
            qty,
            date_add: date_add
        }
        const otherdata={
            name,image,price
        }
        if (data.qty < 1) {
            res.send('Cannot reduce!')
        } else {
            cartModel.addToCart(data)
                .then((result) => {
                    const dataResponse = { id: result.insertId, ...data,...otherdata }
                    miscHelper.response(res, dataResponse, 200)
                })
                .catch(err => console.log(err));
        }
    },

    minQty: (req, res) => {
        const id_cart = req.params.id_cart;
        const qty = 1;
        cartModel.minQty(qty, id_cart)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },

    deleteCart: (req, res) => {
        const id_cart = req.query.id_cart;

        cartModel.deleteCart(id_cart)
            .then((result) => {
                const dataResponse = { id: id_cart }
                    miscHelper.response(res, dataResponse, 200)
            })
            .catch(err => console.log(err));
    },

    deleteAllCart: (req, res) => {
        cartModel.deleteAllCart()
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },
    
    getQty: (req, res) => {
            cartModel.getQty()
                .then((result) => {
                    miscHelper.response(res, result, 200);
                })
                .catch(err => console.log(err));
        }

}//end code