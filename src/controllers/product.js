const productModel = require('../models/product');
const miscHElper = require('../helpers/helpers');
const conn = require('../configs/db')
const fs = require('fs');


module.exports = {
        getAllProduct:(req,res)=>{
            productModel.getProduct()
                    .then((result) => {
                        miscHElper.response(res, result, 200)
                        })
                    .catch(err => console.log(err));
        },

    getProduct: (req, res) => {
        const {key,page} = req.query;
        conn.query("SELECT COUNT(*) as total FROM product_name where name like ?",'%' + key + '%', (err, result) => {
                const total = result[0].total;
                if(total >0){
                    if (page > 0) {
                        productModel.justPagination(key,page, total)
                            .then((result) => {
                                miscHElper.response(res, result, 200)
                            })
                            .catch(err => console.log(err));
                    }
            }else{
                miscHElper.response(res, [1,"Curren Page: 1",[]], 201)
            }
        });     
            
    },

    productDetail: (req, res) => {
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },
    insertProduct: (req, res) => {
        const { name, description, price, stok, id_category } = req.body;

        const date_created = new Date();
        const data = {
            name,
            description,
            price,
            stok,
            image: process.env.URL_IMG + `uploads/${req.file.filename}`,
            id_category,
            created_at: date_created
        }
        productModel.insertProduct(data)
            .then((result) => {
                const dataResponse = { id: result.insertId, ...data }
                miscHElper.response(res, dataResponse, 200)
            })
            .catch(err => res.json(err));
    },
    updateProduct: (req, res) => {
        const id_product = req.params.id_product;
        const date_update = new Date()
        const { name, description, price, stok, id_category } = req.body;
        if(!req.file){
            const data = {
                name,
                description,
                price,
                stok,
                id_category,
                update_at: date_update
            }
            conn.query("SELECT * FROM product_name where id =?", id_product, (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    process.env.URL = result[0].image;
                    productModel.updateProduct(data, id_product)
                        .then((result) => {
                            const dataResponse = { id: id_product, ...data }
                            miscHElper.response(res, dataResponse, 200)
                        })
                        .catch(err => console.log(err));
                } else {
                    res.send('Eror!')
                }
            }
        })
        }else{
            const data = {
                name,
                description, //kalu sama key dan valuenya gini
                price,
                stok, 
                image: process.env.URL_IMG + `uploads/${req.file.filename}`,
                id_category,
                update_at: date_update
            }
            conn.query("SELECT * FROM product_name where id =?", id_product, (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    process.env.URL = result[0].image;
                    productModel.updateProduct(data, id_product)
                        .then((result) => {
                            const dataResponse = { id: id_product, ...data }
                            miscHElper.response(res, dataResponse, 200)
                             const img = process.env.URL.replace(process.env.URL_IMG, '');
                                fs.unlink(img, (err) => {
                                    if (err) {
                                        return;
                                    }
                                });
                                process.env.URL = "";
                        })
                        .catch(err => console.log(err));
                } else {
                    res.send('Eror!')
                }
            }
        })
        }
    },

    deleteProduct: (req, res) => {
        const id_product = req.params.id_product;
        productModel.deleteProduct(id_product)
            .then((result) => {
                const dataResponse = { id: id_product}
                miscHElper.response(res, dataResponse, 200)
            })
            .catch(err => console.log(err));
    },

    filterProduct: (req, res) => {
        const {qey} = req.query;
        console.log('qey')
        productModel.filterProduct(qey)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },

    sortByCategory: (req, res) => {
        const id = req.query.id;
        // console.log('halo')
        productModel.sortByCategory(id) 
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },

    sortUpdate: (req, res) => {
        const date_update = req.params.dateUpdate;
        productModel.sortUpdate(date_update)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },

    addStok: (req, res) => {
        const id_product = req.params.id_product;
        const stokAdd = req.body.stok;
        productModel.addStok(stokAdd, id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
    },

    filterStok: (req, res) => {
        productModel.filterStok()
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    }
}