const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    database: 'myfinance',
    user: 'root',
    password: '123123',
    port: 3306,
    multipleStatements: true //permite hacer mas de una query
});

mysqlconnection.connect(function(err) {
    if (err) {
        throw error;
    } else {
        console.log('conexion exitosa con MySQL!!');
    }
});

module.exports = mysqlconnection;