const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

//info database
const banco = "projetofrontend";
const tableprod = "produtos";
//db
const model = require("./components/mysql/Models");
const database = require("./components/mysql/database");
const db = database.conexao('localhost', 'root', '', banco);


app.use(cors())
app.get("/", (req, res) => {
    model.GetElements(tableprod, db)
    .then((data) => {
        res.send(JSON.stringify(data));
    })
    .catch(err => {console.log(err);})
})

app.listen(port, () => {
    console.log('server open');
});
