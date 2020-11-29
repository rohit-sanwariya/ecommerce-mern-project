const express = require('express');
const products =require('./Data/products')



const app = express()
app.get('/',(req,res)=>console.log('hello'))
app.get('/api/products',(req,res)=>
res.json(products)
)
app.get('/api/product/:id',(req,res)=>{
     
    const product = products.find((p)=>
p._id===req.params.id)
res.json(product)
}
)

app.listen(5000,console.log(('Server on 5000')))