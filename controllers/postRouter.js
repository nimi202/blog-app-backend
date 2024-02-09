const express=require("express")
const postModel=require("../models/postmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let blogpost=new postModel(data)
    let result=await blogpost.save()
    res.json({
        status:"success"
    })
})
module.exports=router