const express=require("express")
const path=require("path")

const app=express()
const port=3001

app.use("/libs",express.static("node_modules"))
app.use("/static",express.static("public"))
app.use("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"views/users","index.html"))
})


app.listen(port,()=>{
   console.log(`server is running on port ${port}`);
    
})