const conn = require("../configs/db");

module.exports = {
    getAllCart: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT cart.*, product_name.name,product_name.image,product_name.price FROM cart INNER JOIN product_name ON product_name.id=cart.id_product", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            }
            );
        });
    },

    addToCart: (data) => {
        return new Promise((resolve, reject) => {

            conn.query("SELECT * FROM cart WHERE id_product=?", data.id_product, (err, result) => {
                if (!err) {
                    if (result.length > 0) {
                            conn.query("select * from cart", (err, result)=>{
                                resolve(result);
                                })
                        }else{
                        conn.query("INSERT INTO cart SET ?", data, (err, result) => {
                            if (!err) {
                                resolve(result);
                            } else {
                                reject(new Error(err));
                            }
                        });
                    }
                }
            });
        });
    },

    addQty: (qty, id_cart) => {
        return new Promise((resolve, reject) => {        
        conn.query("UPDATE cart SET qty=qty + ? WHERE id = ?", [qty, id_cart], (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(new Error(err));
            }
        });
                            
     })
        
    },

    minQty: (qty, id_cart) => {
        return new Promise((resolve, reject) => {
            conn.query("UPDATE cart SET qty=qty - ? WHERE id = ?", [qty, id_cart], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    deleteCart: id_cart => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM cart WHERE id= ?", id_cart, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    deleteAllCart: () => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM cart", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getQty: () => { 
        return new Promise((resolve, reject) => {
            conn.query("SELECT SUM(qty) as getQty FROM cart", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }
};// end code
