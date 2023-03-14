const mysql = require("mysql");
function conexao(host, user, password, dba, port = 3306){
    const db = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: dba,
        port: port,
    })

    db.connect((err) => {
        if(err){
            console.log('conexao não realizada');
        }else{
            console.log("conexão com banco de dados realizada");
        }
    })

    return db;
}


function crateDB(database, db){
    return new Promise((resolve, reject) => {
        const sql = `CREATE DATABASE IF NOT EXISTS ${database}`;
        db.query(sql, (error, results, fields) => {
            if (error) reject(error);

            resolve({"results":results, "erros":error});
        });
    })
}


function dropDB(database, db){
    return new Promise((resolve, reject) => {

        const sql = `DROP DATABASE ${database}`;

        db.query(sql, (error, results, fields) => {
            if (error) reject(error);

            resolve({"results":results, "erros":error});
        });
    })




}

module.exports = { conexao, crateDB, dropDB };
