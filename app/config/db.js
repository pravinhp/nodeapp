var mysql = require('mysql');
var constants = require('./constants.js');

let connection = mysql.createConnection({
  host     : 'db1-master.shaaadi.com',
  user     : 'user-db1-write',
  password : '6Y3a#NfnV#0dc7',
  database : 'shaadi_innodb_33'
});

connection.connect();

module.exports = {connection};