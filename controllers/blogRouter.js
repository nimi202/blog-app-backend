const express = require("express")
const blogModel = require("../models/blogModels")

const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}
router.post("/add", async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.password
    hashPasswordGenerator(password).then(
        (hashedPassword) => {
            console.log(hashedPassword)
            data.password = hashedPassword
            console.log(data)
            let users = new blogModel(data)
            let result =  users.save()
            res.json(
                {
                    status: "success"
                })
        }
    )


    
})
router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await blogModel.findOne({"email":email})
    if(!data)
    {
        return res.json({
            status:"invalid user"
        }
        )
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json({
            status:"invalid password"
        })
    }
    res.json(
        {
            status: "success"
        })

})
module.exports = router