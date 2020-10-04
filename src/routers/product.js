const express = require('express');
const multer = require('multer');
const auth = require('../helpers/auth');
const cors = require('cors');
const Router = express.Router();

const productController = require('../controllers/product');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname)
    }
})


const upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, next) {
        if(!file){
            next()
        }
        const image= file.mimetype.startsWith('image/');
        if(image){
            next(null,true)
        }else{
            next({message: "Only image Allowed!"})
        }
    },
    // limits: {
    //     fileSize: 1024 * 1024
    // }
}).single('image');


Router.get('/',auth.verify, productController.getProduct); //get all prod by page and filter
Router.get('/all',auth.verify, productController.getAllProduct); //get all prod by page and filter
// Router.get('/:id_product',auth.verify, productController.productDetail); // get by id

Router.post('/',auth.verify,(req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send(err)
        }else{
            next();
        }
    })
} , productController.insertProduct); //insert product + upload image

Router.patch('/:id_product', auth.verify,(req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send(err)
        }else{
            next()
        }
    })
}  , productController.updateProduct); // update product + image

Router.delete('/:id_product', auth.verify,  productController.deleteProduct); //delete by id
// Router.get('/', auth.verify, productController.pagination); //pagination
Router.get('/category',auth.verify, productController.sortByCategory); //sort by category

Router.get('/filter', productController.filterProduct); //filter by name
Router.get('/stok', productController.filterStok); //limit stok

Router.patch('/addstok/:id_product',  auth.verify,  productController.addStok); //add stok

Router.get('/update/:dateUpdate', productController.sortUpdate) //sort by date update


module.exports = Router; 