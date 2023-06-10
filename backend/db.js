const mongoose=require("mongoose");
const connection =mongoose.connect("mongodb+srv://borsejugal:jugalborse@cluster0.f1vsoq3.mongodb.net/google_notes?retryWrites=true&w=majority");
module.exports={connection}