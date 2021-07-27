// arquivo a ser rodado para que as tabelas de banco de dados sejam criadas
const Database = require("./config")

const initDb = {
    async init(){  // async e await devem estar juntos sempre
        const db = await Database() //await para esperar que config do Database seja processada e guardada na db  
        // comandos sql em maiusculo, nomes das tabelas em minusculo
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`); // integer primary key: ids numericos que não se repetem (unicos)
    
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);
        
        await db.close() 
    }
} 

initDb.init(); // execução do comando acima (não é mais necessário alterar este arquivo)
