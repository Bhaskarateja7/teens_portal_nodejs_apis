const services=require('../services/vendor.service');
const {vendorSchema,phoneSchema} = require('../validators/vendor.validator')


Add = async (req,res,next)=>{
    try{
        let data = req.body;
        const result = await vendorSchema.validateAsync(data);

        if(req.body.password === req.body.confirmpassword){
            const post = await services.create(result);
            res.status(200).send(post);
        }else{
            res.status(200).json({ message : 'Missmatch Password'});

        } 
    }catch(err){
        res.send(err.message)
        // next();
    }

}

get = async (req,res,next)=>{
    try{
        res.status(200).send(await services.getall());


    }catch(err){
        
        res.send(err.message)
    }
}

getbyid = async (req,res,next)=>{
    try{
        
        const result= await services.get(req.params.id);
        if(result.length == 0)
        return res.status(404).send({ message : 'id not found'})   
             
        return res.status(200).send(result);
    }catch(err){
        res.send(err.message)
         // next();

    }
}

update = async (req,res,next)=>{
    try{
        const result = await services.update(req.params.id);
        if(result.affectedRows==0)
        return res.status(404).send({message: " id not found "});

        return res.status(200).send({message: "user Updated"})

    }catch(err){
        res.send(err.message)
         // next();
    }

}

phone = async (req,res,next)=>{
    try{
       let data =req.body;
        const results = await phoneSchema.validateAsync(data);
        const result = await services.updatephone(req.params.id,results);
        if(result.affectedRows==0)
        return res.status(404).send({message: " id not found "});

        return res.status(200).send(result)

    }catch(err){
        res.send(err.message)
         // next();
    }

}

remove =  async (req,res,next)=>{
    try{
        const result = await services.remove();
        if(result.affectedRows==0)
        return res.status(404).send({message: " id not found "});

        return res.status(200).send({message: "User Removed"})

    }catch(err){
        res.send(err.message)
         // next();
    }

}

module.exports={
    Add,
    get,
    getbyid,
    update,
    remove,
    phone
}