const express=require("express")
const path=require("path")

const app=express()
const port=3001
const userRoutes=require("./routes/user")
const adminRoutes=require("./routes/admin")

app.use("/libs",express.static("node_modules"))
app.use("/static",express.static("public"))
app.use(adminRoutes)
app.use(userRoutes)


app.listen(port,()=>{
   console.log(`server is running on port ${port}`);
    
})