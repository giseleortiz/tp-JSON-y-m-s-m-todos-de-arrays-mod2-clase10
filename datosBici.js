// lee el JSON....
// y lo parsea al JSON...

const fs = require('fs');
const bicisJSON = fs.readFileSync('./bicicletas.json','utf-8');


const leerJSON = () => {
    return JSON.parse(bicisJSON)
}
//console.log(leerJSON(bicisJSON));

module.exports = leerJSON// exportar el JSON parseado