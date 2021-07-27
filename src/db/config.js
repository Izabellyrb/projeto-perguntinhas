const sqlite3 = require("sqlite3")
const { open } = require("sqlite") // desta forma o js só importa o item open dentro do sqlite

module.exports = () => 
    // open é usado para que seja aberta uma conexão com o db
    open({
        filename: './src/db/rocketq.sqlite', // qual o arquivo do db
        driver: sqlite3.Database // quem comanda o db
    })
