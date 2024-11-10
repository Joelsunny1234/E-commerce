const express=require('express');
const cors=require("cors");
require("./dB/config");
const User=require("./dB/User");
const app=express();
const products=require("./dB/product")
app.use(express.json());
app.use(cors());

app.post("/register",async (req,res)=>{
    let user = new User(req.body);
    let result =await user.save();
    result=result.toObject();
    delete result.password
    res.send(result)
})
app.post("/login",async(req,res)=>{
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
               
                res.send(user)
            }
        else {
            res.send({ result: "No User found" })
        }
    } else {
        res.send({ result: "NO User found" })
    }
})
app.post("/add_product",async(req,resp)=>{
    let product=new products(req.body);
    let result=await product.save();
    resp.send(result);
})
app.get("/products",async(req,resp)=>{
    const pdct= await products.find();
    if (pdct.length>0)
    {
        resp.send(pdct);
    }
})
app.delete("/product/:id", async (req, resp) => {
    let result = await products.deleteOne({ _id: req.params.id });
    resp.send(result)
}),
app.get("/products/:id", async (req, resp) => {
    let result = await products.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ "result": "No Record Found." })
    }
})
app.put("/products/:id", async (req, resp) => {
    let result = await products.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

app.listen(5000);