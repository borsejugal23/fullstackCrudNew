const express=require("express");
const { UserModel } = require("../Model/user.model");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { auth } = require("../Middleware/auth");
const userRouter=express.Router();

userRouter.post("/register",(req,res)=>{
    const {name,email,pass}=req.body
    try {
        bcrypt.hash(pass,5,async (err,hash)=>{
            if (err){
                res.status(200).json({error:err.message})
            }
            else{
                const user=new UserModel({name,email,pass:hash});
                await user.save()
                res.status(200).json({data:req.body})
            }
        })
    } catch (error) {
        console.log({error:error.message})
    }
});

userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body;

    try {
        let user=await UserModel.findOne({email})
       
        if (user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                if (result){
                    var token = jwt.sign({ userid:user._id,username:user.name }, 'masai');
                    res.status(200).json({login:"login success",token:token})

                }else{
                    res.status(200).json({login:"login failed"})
                }
            })
        }
        else{
            res.status(200).json({login_user:"user is not found"})
        }
    } catch (error) {
        res.status(400).json({error:"login error"})

    }
});

module.exports={userRouter}