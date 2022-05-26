const db =require("../config/db")

const { getKeys } = require('../utils/keys.utils');


async function getAll() {    
   
    db.query("SELECT * FROM job",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          return {result : res.send(result), message: `get all job_category details` };
        }
      });
   ;
  }
  
async function get(id) {
    db.query("SELECT * FROM job where id = ?",[id], (err, result) => {
        if (err) {
          return{err:err}
        } else {
          return {message: `get job ${id} details`, result : res.send(result) };
        }
      });
}

async function create(job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,updated_time) {
   var status ='A';
    db.query(
        
        "INSERT INTO job (job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,status,updated_time) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
        [job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,status,updated_time],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return { message:  `create job`, result : res.send("Values Inserted")};
          }
        }
      );
    }
async function update(id) { 
    db.query(
        "UPDATE job SET status = 'D' WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return { message:  `job status updated `, result : res.send(result)};
          }
        }
      );
}

async function remove(id) {
    db.query("DELETE FROM job WHERE id = ?",[id],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          return { message:  `job removed `, result : res.send(result)};
       
        }
     });
    }


module.exports = {
    create,
    update,
    remove,
    get,
    getAll
}