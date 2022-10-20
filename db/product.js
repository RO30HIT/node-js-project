const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    "name":"String",
    "price":"String",
    "userId":"String",
    "company":"String",
    "category":"String",
})

module.exports= mongoose.model('products',ProductSchema)