const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email:{
         type: String,
         required: true,
    },
    
    images:[String],       //single value can store in square bracket ('[]')

    createdAt:{
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    }

})
const userModel = mongoose.model('Users',userSchema);
// const testProduct = new productModel({
//     title: 'titan watch',
//     price: 1000,
// });

module.exports = userModel;
// testProduct.save().then((res)=>{
//     console.log(res);
// })