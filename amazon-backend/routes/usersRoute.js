const express = require('express');
const usersController = require('../controllers/usersController.js');
const userRouter = express.Router();

productRouter.route('/')
    .get(usersController.getAllProducts)
    .post(usersController.addProduct)
productRouter.route('/:id')
    .put(usersController.replaceProduct)
    .delete(usersController.deleteProduct)

module.exports = userRouter;
