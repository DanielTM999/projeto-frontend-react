function createTable(Table, colluns, type, db){
    return new Promise((resolve, reject) => {
        if(colluns.length !== type.length) reject("Erro de colluns e types")
        let pste = "";
        for(let i=0; i < colluns.length; i++){
            type[i] = type[i].toUpperCase();
            pste += `${colluns[i]} ${type[i]} NOT NULL, `
        }

        pste = pste.substring(0, pste.length-2);

        const sql = `CREATE TABLE IF NOT EXISTS ${Table}(id${Table} INT NOT NULL AUTO_INCREMENT,${pste}, PRIMARY KEY(id${Table}))`;

        db.query(sql, (error, results, fields) => {
             if (error) reject(error);

            resolve({"results":results, "erros":error});
        });
    });

}

function dropTable(Table, db){
    return new Promise((resolve, reject) => {
        const sql = `DROP TABLE ${Table}`;

        db.query(sql, (error, results, fields) => {
            if (error) reject(error);

            resolve({"results":results, "erros":error});
        });

    });
}

function insertTable(Table, colluns = [], customer = [], db){
    return new Promise((resolve, reject) => {
        if (colluns.length !== customer.length) reject("Erro de colluns e types");

        var pste = "";
        var aux = "";
        for(let i=0; i < colluns.length;i++){
            pste += `${colluns[i]},`;
            aux +=  "?,";
        }
        pste = pste.substring(0, pste.length-1);
        aux = aux.substring(0, aux.length-1)

        var sql = `INSERT INTO ${Table}(${pste}) VALUES (${aux})`;

        db.query(sql, customer ,(error, results, fields) => {
            if(error) reject(error);

            resolve({"results":results, "erros":error});
        });
    });
}

function GetElements(Table, db){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${Table}`;

        db.query(sql, (error, results, fields) => {
            if(error) reject(error);

            resolve({"results":results, "erros":error});
        });
    });
}

module.exports = {createTable, dropTable, insertTable, GetElements}

