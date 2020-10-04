const conn = require('../configs/db');

module.exports = {
    allPayment: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT payment.faktur,payment.total,payment.qty,user.username, date_format(payment.date_pay, '%d %M %Y') as date_pay from payment JOIN user on user.id=payment.id_user ORDER BY `date_pay` DESC", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },    

    history: (time) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT payment.faktur,payment.total,payment.qty,user.username, date_format(payment.date_pay, '%d %M %Y') as date_pay from payment JOIN user on user.id=payment.id_user WHERE `date_pay` Like ?",'%' + time + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    deletePayment: (id_payment) => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM payment WHERE id=?", id_payment, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    incomeToday: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT (SELECT SUM(total) FROM payment WHERE YEAR(date_pay)=YEAR(NOW()) GROUP BY YEAR(date_pay)) AS year_omzet, (SELECT SUM(total) FROM `payment` WHERE DATE_FORMAT(date_pay, '%d %M %Y')= DATE_FORMAT(NOW(), '%d %M %Y')) AS INCOME_TODAY, (SELECT (SELECT SUM(QTY) FROM payment WHERE YEARWEEK(date_pay)=YEARWEEK(NOW()) GROUP BY YEARWEEK(date_pay))) AS order_week, (select sum(total) from payment where date_format(date_pay, '%d %M %Y')=date_format(now(),'%d %M %Y')-1) as Yesterday, (SELECT SUM(total) FROM payment WHERE YEAR(date_pay)=YEAR(NOW())-1 GROUP BY YEAR(date_pay)) AS last_year, (SELECT (SELECT SUM(QTY) FROM payment WHERE YEARWEEK(date_pay)=YEARWEEK(NOW())-1 GROUP BY YEARWEEK(date_pay))) AS last_week", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    detailPayment:(faktur)=>{
        return new Promise((resolve,reject)=>{
            conn.query("SELECT detail.qty as qtyDetail,detail.total as totalDetail, payment.*,product_name.name,product_name.price, user.username FROM detail INNER JOIN payment on detail.faktur=payment.faktur INNER JOIN product_name ON product_name.id = detail.id_product INNER JOIN user ON user.id = payment.id_user WHERE payment.faktur=?",faktur,(err,result)=>{
                 if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    detailPay:(faktur)=>{
        return new Promise((resolve,reject)=>{
            conn.query("SELECT detail.qty as qtyDetail,detail.total as totalDetail,product_name.name FROM detail INNER JOIN product_name ON product_name.id = detail.id_product WHERE detail.faktur=?",faktur,(err,result)=>{
                 if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    detail:()=>{
        return new Promise((resolve,reject)=>{
            conn.query("SELECT detail.*,product_name.name FROM detail INNER JOIN product_name ON product_name.id = detail.id_product",(err,result)=>{
                 if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err)); 
                }
            })
        })
    },


} //end code