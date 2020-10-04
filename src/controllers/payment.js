const paymentModel = require('../models/payment');
const miscHelper = require('../helpers/helpers');

module.exports = {
    allPayment: (req, res) => {
        const faktur = req.query.faktur;
        if(!faktur){
        paymentModel.allPayment()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
        }else{
            paymentModel.detailPay(faktur)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
        }
    },
    deletePayment: (req, res) => {
        const id_payment = req.params.id_payment;
        paymentModel.deletePayment(id_payment)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },
    incomeToday: (req, res) => {
        paymentModel.incomeToday()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },

    detailPayment: (req, res)=>{

        const faktur = req.params.faktur
        paymentModel.detailPayment(faktur)
        .then((result) =>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    detail:(req,res)=>{
      paymentModel.detail()
        .then((result) =>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))  
    },

    history:(req,res)=>{
        const time=req.query.time
      paymentModel.history(time)
        .then((result) =>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))  
    }
}