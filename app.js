const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRoute=require("./controllers/blogRouter")
const postRouter=require("./controllers/postRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nimi:nimi@cluster0.ek3ai0r.mongodb.net/usersdb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/users",blogRoute)
app.use("/api/post",postRouter)
app.listen(3001,()=>{
    console.log("Server running")
})
