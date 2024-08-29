const express=require("express")
const path=require("path")
const router=express.Router()


router.use("/admin/blog/create",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/admins","blog-create.html"))
})
router.use("/admin/blog/:blogid",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/admins","blog-edit.html"))
})
router.use("/admin/blogs",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/admins","blog-list.html"))
})






module.exports=router