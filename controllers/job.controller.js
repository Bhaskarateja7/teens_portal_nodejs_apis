const services=require('../services/job.service');
const {jobSchema} = require('../validators/job.validator')


Add = async (req,res,next)=>{
    try{
        let data = req.body;
        const result = await jobSchema.validateAsync(data);
        const post = await services.create(result);
        res.status(200).send(post);
        

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
         // next();
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

        return res.status(200).send(result)

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
    remove
   
}