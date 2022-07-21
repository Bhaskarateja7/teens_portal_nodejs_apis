const pool = require('../config/db');
const sql = require('../sql')

create = (values) => {
    return new Promise((resolve,reject)=>{
       
            pool.query(sql.insertuser,
            [null,values.email,values.password,'teen','active',new Date()]
            ,(error,results)=>{
                if(error){
                    return reject(error);
                }else {
                    var uid=results.insertId;
                    resolve(new Promise((resolve,reject)=>{
                        pool.query(sql.insertteen,[null,values.firstname,values.lastname,values.email,values.dob,values.ssn,values.gender,values.parentname,values.parentemail,values.parentcontact,values.address,values.city,values.state,values.zipcode,'Active',new Date(),uid],(error,result)=>{
                            if(error){
                                return reject(error)
                            }else{
                                resolve('user created',result.insertId)
                            }
                        })
                    }))
                }
            })
       
        
    })
}

getall = () => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.get,['teen'],(error,results)=>{
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
        pool.query(sql.getbyid,['teen',id],(error,result)=>{
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
        pool.query(sql.updateStatus,['teen',new Date(),id],(error)=>{
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
        pool.query(sql.remove,['teen',id],(error)=>{
            if(error){
                return reject(error);
            }else{
                return resolve("user Deleted")
            }
        })
        
    })
}


module.exports={
    create,
    get,
    getall,
    update,
    remove
    
}