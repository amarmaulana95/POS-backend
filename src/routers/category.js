const express = require('express');
const auth = require('../helpers/auth')

const Router = express.Router();
const categoryController = require('../controllers/category');




Router.get('/',auth.verify, categoryController.getCategory);
Router.post('/',  categoryController.insertCategory);
Router.patch('/:id_category', auth.verify,  categoryController.updateCategory);
Router.delete('/:id_category', auth.verify,  categoryController.deleteCategory);


module.exports = Router;