function getprod(){
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(err => reject(err));
    });
}


function cadastroReq(body){
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/cadastro', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then((data) => {
            resolve(data);
        })
        .catch(err => reject(err));
    });
}


module.exports = {getprod, cadastroReq}
