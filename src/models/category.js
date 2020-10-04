const connection = require("../configs/db");

module.exports = {
    getCategory: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    insertCategory: data => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    updateCategory: (data, id_category) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE category SET ? WHERE id=?",[data, id_category],(err, result) => {
                    if (!err) {
                    resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    },

    deleteCategory: id_category => {
        return new Promise((resolve, reject) => {
            connection.query(
                "DELETE FROM category WHERE id=?",id_category,(err, result) => {
                    if (!err) {
                    resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    }
};//end code
