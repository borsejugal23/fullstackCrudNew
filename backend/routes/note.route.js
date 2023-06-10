const express=require("express");
const { auth } = require("../Middleware/auth");
const { noteModel } = require("../Model/note.model");
const noteRouter=express.Router();
noteRouter.use(auth)


noteRouter.post("/create",async(req,res)=>{
    try {
        const note=new noteModel(req.body);
        await note.save()
        res.send({msg:"new note added",note:req.body})
    } catch (error) {

        res.send({error:error.message})
    }
});

noteRouter.get("/",async(req,res)=>{
    try {
        const note=await noteModel.find({userid:req.body.userid});
        res.send({notes:note})
    } catch (error) {

        res.send({error:error.message})
    }
});

noteRouter.patch("/update/:noteID", async (req, res) => {
    const userIDinUserDoc = req.body.userid;
    try {
      const { noteID } = req.params;
      const note = await noteModel.findById({_id:noteID});
      let userIDinNoteDoc = note.userid;
      if (userIDinNoteDoc === userIDinUserDoc) {
        await noteModel.findByIdAndUpdate({_id:noteID}, req.body);
        res.json({ msg: "Note updated" });
      } else {
        res.json({ msg: "Not authorized" });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
});
  
noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const userIDinUserDoc = req.body.userid;
    try {
      const { noteID } = req.params;
      const note = await noteModel.findById({_id:noteID});
      let userIDinNoteDoc = note.userid;
      if (userIDinNoteDoc === userIDinUserDoc) {
        await noteModel.findByIdAndDelete({_id:noteID});
        res.json({ msg: "Note deleted" });
      } else {
        res.json({ msg: "Not authorized" });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
});
module.exports={noteRouter}