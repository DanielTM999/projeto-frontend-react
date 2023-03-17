const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const port = 5000;

//info database
const banco = "projetofrontend";
const tableprod = "produtos";
//db
const model = require("./components/mysql/Models");
const database = require("./components/mysql/database");
const db = database.conexao('localhost', 'root', '', banco);


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    model.GetElements(tableprod, db)
    .then((data) => {
        res.send(JSON.stringify(data));
    })
    .catch(err => {console.log(err);})
})

app.post("/cadastro", (req, res) => {
    console.log(req.body);
    model.getInigElemnts("usuarios", ['cpf', 'email'], [req.body.cpf, req.body.email], db)
    .then((data) => {
        console.log(data.results.length);
        if(data.results.length >= 1){
            res.send(JSON.stringify({"erros":true, "status":"duplicado"}))
        }else{
            model.insertTable("usuarios", ["nome", "email", "cpf", "senha"], [req.body.usuario, req.body.email, req.body.cpf, req.body.Senha], db)
            .then((data) => {res.send(JSON.stringify(data))})
            .catch(err => res.send(JSON.stringify(err)))
        }
    })
    .catch(err => {console.log(err);})

})

app.post("/login", (req, res) => {
    model.getInigElemnts("usuarios", ["cpf"], [req.body.cpf], db)
    .then((data) => {
        if(data.results.length !== 0){
            if((req.body.cpf === data.results[0].cpf) && (req.body.senha === data.results[0].senha)){
                const response = {"id":data.results[0].idusuarios, "nome":data.results[0].nome, "email":data.results[0].email, "cpf":data.results[0].cpf, "logado":true};
                res.send(JSON.stringify(response))
            }else{
                res.send(JSON.stringify({"erros":true, "status":"usuario/senha incorretos"}))
            }
        }else{
            res.send(JSON.stringify({"erros":true, "status":"usuario/senha incorretos"}))
        }
    })
    .catch(err => {JSON.stringify(err)})
})


app.post("/produtos", (req, res) => {
    console.log(req.body);
    model.getInigElemnts("produtos", ["idprodutos"], [req.body.id], db)
    .then((data) => {
        res.send(JSON.stringify(data))
    })
    .catch(err => {console.log(err)})
})

app.listen(port, () => {
    console.log('http://localhost:'+port);
});
