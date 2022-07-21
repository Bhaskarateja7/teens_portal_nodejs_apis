const pool = require('../config/db');
const sql = require('../sql')

create = (values) => {
    return new Promise((resolve,reject)=>{       
            pool.query(sql.insertjobcategory,
            [null,values.category,'active',new Date()]
            ,(error,results)=>{
                if(error){
                    return reject(error);
                }else {
                    var jcid=results.insertId;
                    resolve(new Promise((resolve,reject)=>{
                        pool.query(sql.insertjob,[null,values.orgname,values.jobdescription,values.payment,values.timestart,values.timeend,values.timmings,values.city,values.state,values.zipcode,values.contactdetails,'Active',new Date(),jcid],(error,result)=>{
                            if(error){
                                return reject(error)
                            }else{
                                resolve('job created',result.insertId)
                            }
                        })
                    }))
                }
            })
       
        
    })
}

createjob = (values,id) => {
    return new Promise((resolve,reject)=>{       
                 pool.query(sql.insertjob,[null,values.orgname,values.jobdescription,values.payment,values.timestart,values.timeend,values.timmings,values.city,values.state,values.zipcode,values.contactdetails,'Active',new Date(),jcid],(error,result)=>{
                     if(error){
                       return reject(error)
                           
                    }else{
                       return resolve('job created',result.insertId)
                            }
                        })
                    })
                }
            

getall = () => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.get,['job'],(error,results)=>{
            if(error){
                return reject(error);                
            }else{
                return resolve(results);
            }
        })
        
    })
}


get = (id) => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.getbyid,['job',id],(error,result)=>{
            if(error){
                return reject(error);
            }
            else{
                return resolve(result);
            }
        })        
    })
}

update = (id) => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.updateStatus,['job',new Date(),id],(error)=>{
            if(error){
                return reject(error);
                
            }else{
                return resolve('Account Deactived') 
            }
        })
        
    })
}



remove = (id) => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.remove,['job',id],(error)=>{
            if(error){
                return reject(error);
            }else{
                return resolve("job Deleted")
            }
        })
        
    })
}


module.exports={
    create,
    createjob,
    get,
    getall,
    update,
    remove
    
}