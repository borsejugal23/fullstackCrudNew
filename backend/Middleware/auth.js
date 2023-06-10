const jwt =require("jsonwebtoken");

const auth=(req,res,next)=>{
   const token=req.headers.authorization?.split(" ")[1];

   if (token){
    try {
        const decoded=jwt.verify(token,"masai");
        if (decoded){
            req.body.userid=decoded.userid;
            req.body.user=decoded.username;
            // console.log(decoded.userid)
            next()
        }else{
            res.status(200).json({"msg":"token is not valid"})
        }
    } catch (error) {
        res.status(404).json({error:error.message})

    }
   }
   else{

    res.status(200).json({"msg":"login first"})

   }
}
module.exports={auth}