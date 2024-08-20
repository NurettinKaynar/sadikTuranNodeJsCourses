const express=require("express")
const path = require("path")
const app=express()
const port=process.env.port ||3001

app.use("/blogs/:blogid",(req,res)=>{

    res.sendFile(path.join(__dirname,"views/users","blog-details.html"))
})
app.use("/blogs",(req,res)=>{

    res.sendFile(path.join(__dirname,"views/users","blogs.html"))
})
app.use("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"views/users","index.html"))
})




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})