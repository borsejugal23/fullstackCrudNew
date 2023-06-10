const mongoose=require("mongoose");

const noteSchema=mongoose.Schema(
    {
        "title":String,
        "body":String,
        "user":String,
        "userid":String,
        "category":String
   },
   {
    versionKey:false
   }
)

const noteModel=mongoose.model("note",noteSchema);

module.exports={noteModel}