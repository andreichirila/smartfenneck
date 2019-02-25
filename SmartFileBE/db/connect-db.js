'use strict';
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xebative123'
});
con.connect(function (err) {
    if (err) throw err;
    console.log('DB Connected!');
});
module.exports = con;