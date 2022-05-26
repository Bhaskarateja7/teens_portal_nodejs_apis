const db =require("../config/db")

const { getKeys } = require('../utils/keys.utils');


async function getAll() {    
    db.query("SELECT * FROM job_category",(err, result) => {
        if (err) {
          console.log(err);
        } else { 
          return {result : res.send(result), message: `get all job_category details` };
        }
      });
 }

async function get(id) {
    
    db.query("SELECT * FROM job_category where id = ?",[id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          return { message: `get job_category ${id} details`, result : res.send(result)};
        }
      });
}

async function create(category,unique_id) {
    db.query(
        "INSERT INTO job_category (category,unique_id) VALUES (?,?);",
        [category,unique_id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return { message:  `create job_category`, result : res.send("Values Inserted")};
          }
        }
      );
}

async function update(id) { 
    db.query(
        "UPDATE job_category SET status = 'D' WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return { message:  `job_category status updated `, result : res.send(result)};
          }
        }
      );


async function remove(id) {
    db.query("DELETE FROM job_category WHERE id = ?",[id],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          return { message:  ` job_category removed`, result : res.send(result)};
        }
      });
}
}

module.exports = {
    create,
    update,
    remove,
    get,
    getAll
}