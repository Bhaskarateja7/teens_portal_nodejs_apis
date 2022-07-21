const pool = require('../config/db');
const sql = require('../sql')

create = (values) => {
    return new Promise((resolve,reject)=>{
       
            pool.query(sql.insertuser,
            [null,values.email,values.password,'vendor','active',new Date()]
            ,(error,results)=>{
                if(error){
                    return reject(error);
                }else {
                    var uid=results.insertId;
                    resolve(new Promise((resolve,reject)=>{
                        pool.query(sql.insertvendor,[null,values.name,values.email,values.phonenumber,values.ssn,values.address,values.city,values.state,values.zipcode,'Active',new Date(),uid],(error,result)=>{
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
        pool.query(sql.get,['vendor'],(error,results)=>{
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
        pool.query(sql.getbyid,['vendor',id],(error,result)=>{
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
        pool.query(sql.updateStatus,['vendor',id],(error)=>{
            if(error){
                return reject(error);
                
            }else{
                return resolve('Account Deactived') 
            }
        })
        
    })
}

updatephone = (id,data) => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.update,['vendor','phonenumber',data.phonenumber,new Date(),id],(error)=>{
            if(error){
                return reject(error);
                
            }else{
                return resolve('phonenumber changed') 
            }
        })
        
    })
} 

remove = (id) => {
    return new Promise((resolve,reject)=>{
        pool.query(sql.remove,['vendor',id],(error)=>{
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
    remove,
    updatephone
}