export function bodyExists(req,res,next){
    try{
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(400).json({"error":"invalid body cannot be empty"})
        }
  
        next()
  
    }catch(err){
        console.log(err)
    }

}