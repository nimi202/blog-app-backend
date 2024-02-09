const express=require("express")
const blogModel=require("../models/blogModels")

const router=express.Router()
router.post("/add",async(req,res)=>{
    let data= req.body
    let users=new blogModel(data)
    let result=await users.save()
    res.json(
        {
        status:"success"
        })
})
module.exports=router