const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"users"
    },
    post:{
        type:String
        
    },
    postedDate:{
        type:Date,
        default:Date.now
    }
}
)
module.exports=mongoose.model("post",postSchema)