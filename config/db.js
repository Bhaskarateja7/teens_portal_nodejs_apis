require('dotenv');

const mysql = require("mysql2")


const dbs= mysql.createConnection({
  user:"root", 
  host:  "localhost",
  password: "Bhaskar@1437",
  database: "teen_job_portal",

  });

  dbs.connect(function(){
    console.log("connected")
  });

  module.exports=dbs;