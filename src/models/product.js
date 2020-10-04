const connection = require('../configs/db');
const fs = require('fs');

module.exports = {
    getProduct: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT product_name.*,category.nama_category FROM product_name INNER JOIN category ON product_name.id_category=category.id order by stok < 10 desc", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },


    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT product_name.*,category.nama_category FROM product_name INNER JOIN category ON product_name.id_category=category.id WHERE product_name.id = ?", id_product, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO product_name SET ?", data, (err, result) => {
                if (!err) {
                    
                    resolve(result);
                 
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateProduct: (data, id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE product_name SET ? WHERE id = ?", [data, id_product], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT image FROM product_name WHERE id=?", id_product, (err, result) => {
                const img = result[0].image.replace(process.env.URL_IMG, '');
                fs.unlink(img, (err) => {
                    if (err) throw err;
                });
            });
            connection.query("DELETE FROM product_name WHERE id = ?", id_product, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    filterProduct: (key) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name WHERE name LIKE ?", '%' + key + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err)); 
                }
            });
        });
    },

    filterStok: (key) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name WHERE stok < 10", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err)); 
                }
            });
        });
    },



    justPagination: (key,nomor, total) => {

        const dataPage = 12;// jumlah data per halaman

        const totalPage = total / dataPage; // mengitung jumlah halaman

        const firstData = (dataPage * nomor) - dataPage; // menentukan awal data tiap halaman


        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name where name like ? ORDER BY name ASC LIMIT ?, ?", ['%' + key + '%',firstData, dataPage], (err, result) => {
                if (!err) {
                    const page = Math.ceil(totalPage);
                    if (nomor <= page) {
                        resolve([page, `Curren Page: ${nomor}`, result]);
                    }
                } else {''
                    reject(new Error(err));
                }
            })
        })
    },

    sortByCategory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name WHERE id_category LIKE ? order by stok < 10 desc", '%' + id + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err)); 
                }
            });
        });
    },
    sortUpdate: (date_update) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT category.nama_category, product_name.* FROM category INNER JOIN product_name ON category.id=product_name.id_category WHERE product_name.update_at LIKE ?", '%' + date_update + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    addStok: (stokAdd, id_product) => {
        console.log(stokAdd);
        const date_update = new Date()
        return new Promise((resolve, reject) => {
            connection.query("UPDATE product_name SET stok = stok + ?,update_at=? WHERE id = ?", [stokAdd, date_update, id_product], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }

}  // end code