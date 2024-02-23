const express=require("express")

const app=express()



app.use("/blogs/:id/users/:username",(req,res)=>{
    console.log(req.params.username);
    console.log(req.params.id);
    res.send("Blog Detail Page")
})
app.use("/blogs",(req,res)=>{
    res.send("Blog Page")
})

app.use("/",(req,res)=>{
    res.send("Home Page")
})














app.listen(3000,()=>{
    console.log("Server Listening on port 3000");
})