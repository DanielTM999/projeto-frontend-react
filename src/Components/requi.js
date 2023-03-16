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


module.exports = {getprod}
