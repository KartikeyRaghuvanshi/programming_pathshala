const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    price:{
         type: Number,
         required: true,
    },
    description: String,
    images:[String],
    createdAt:{
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    }

})
const productModel = mongoose.model('Products',productSchema);
// const testProduct = new productModel({
//     title: 'titan watch',
//     price: 1000,
// });

module.exports = productModel;
// testProduct.save().then((res)=>{
//     console.log(res);
// })