const express=require("express")
const cors=require('cors')
require('dotenv').config()
require("./db/config")
const User=require("./db/users")
const Products=require('./db/product')



const app=express()


app.use(express.json())
app.use(cors())

app.post("/register",async(req,res)=>{
    let user=new User(req.body)
    let result=await user.save()
    result=result.toObject();
    delete result.password
    res.send(result)
 })
    
    


app.post("/login",async(req,res)=>{
    if (req.body.email && req.body.password){
        const result=await User.findOne(req.body).select("-password")
        res.send(result)
        }
    else{
        res.send('error not found')
    }
} )   

app.post("/add-product",async(req,res)=>{
    const newProduct=new Products(req.body)
    const product=await newProduct.save()
    res.send(product)
})

app.get("/products",async(req,res)=>{
    const allProducts=await Products.find()
    res.send(allProducts)
})

app.delete("/product/:id",async(req,res)=>{
    const id=req.params.id
    const result=await Products.deleteOne({_id:id})
    res.send(result)
})

app.get("/product/:id",async(req,res)=>{
    const id=req.params.id
    const result=await Products.findOne({_id:id})
    if (result){
    res.send(result)
    }
    else{
        res.send("error not found")
    }
})

app.put("/product/:id",async(req,res)=>{
    const result=await Products.updateOne(
        {_id:req.params.id},
        {$set:req.body}
    )
    res.send(result)
})

app.get("/search/:key",async(req,res)=>{
    const result=await Products.find({
        "$or":[
         {name:{$regex:req.params.key}},
         {price:{$regex:req.params.key}},
         {company:{$regex:req.params.key}},
         {category:{$regex:req.params.key}}
        ]
    })
    res.send(result)
})

app.listen(5000);