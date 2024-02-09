const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema(
    {
        name:String,
        age:String,
        mobno:String,
        address:String,
        pin:String,
        email:String,
        password:String
    }
)
module.exports = mongoose.model("users", blogSchema)