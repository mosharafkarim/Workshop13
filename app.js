const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const author=require('./authorization')
const config=require("./config")

const port=process.env.PORT || 2000

const server=app.listen(port,()=>{
    console.log(`server is running... ${server.address().port}`)
})

app.get('/token',(req,res)=>{
    const payload={
        name : "Mosharaf",
        scopes:["Client:read"]
    }
    const token=jwt.sign(payload,config.JWT_SECRET)
    res.send(token)
})
app.get('/client',author("Client:read"),(req,res)=>{
    res.send("Client's information")
})