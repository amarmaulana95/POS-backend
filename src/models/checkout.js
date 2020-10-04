const conn = require('../configs/db');

module.exports = {
    checkoutAll: (data) => {
        return new Promise((reslove, reject) => {
            conn.query("SELECT * FROM cart", (err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        const dataPayment = {
                            faktur: data.faktur,
                            date_pay: new Date(),
                            id_user: data.id_user,
                            qty: data.qty,
                            total: data.total
                        }
                        conn.query("INSERT INTO payment SET ?", dataPayment);
                        result.forEach((e) => {
                            conn.query("SELECT price,stok,name FROM product_name WHERE id=?", e.id_product, (err, product) => {
                                if (product.length > 0) {
                                    product.forEach((ev) => {
                                        if (ev.stok < 1 || ev.stok < e.qty) {
                                            reslove(`Some item cannot be fulfilled!`);
                                        } else {
                                            const total = e.qty * ev.price
                                            const detailPayment = {
                                                faktur: data.faktur,
                                                id_product: e.id_product,
                                                qty: e.qty,
                                                total: total
                                            }

                                            conn.query("INSERT INTO detail SET ?", detailPayment);
                                            conn.query("DELETE FROM cart");

                                            conn.query("UPDATE product_name SET stok=stok - ? WHERE id=?", [e.qty, e.id_product]);
                                            reslove('Checkout All Success');
                                        }
                                    })
                                }
                            })
                        })
                    }
                } else {
                    reject(new Error(err));
                }
            })
        })
    }

};
