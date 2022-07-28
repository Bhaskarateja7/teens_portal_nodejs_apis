const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
connectionLimit : 100,
host : 'devteensdb.cteirschjtfb.us-east-1.rds.amazonaws.com',
user : 'admin',
password: 'C{Cx2Y&dJf*D,>!z',
database : 'dev_teens_db'

});

module.exports = pool ; 
