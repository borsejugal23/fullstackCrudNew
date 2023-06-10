const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { noteRouter } = require("./routes/note.route");
const cors=require("cors")

const app=express();

app.use(cors())
app.use(express.json());
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.listen(4000,async()=>{
    try {
        await connection
        console.log("server is running at port 4000")
    } catch (error) {
        
        console.log("error")
    }
})