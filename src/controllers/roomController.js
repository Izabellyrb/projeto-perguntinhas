// redirecionamento de salas
const { open } = require("sqlite")
const Database = require("../db/config") // importando db

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true
        while(isRoom) {  // se for true ele vai inseir... se não, volta o loop
            // gera o numero da sala
            for(var i= 0; i < 6; i++){ // laço que concatena nums alatorios até terem 6 digitos p/ formar a roomId
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
                roomId += Math.floor(Math.random() * 10).toString() 
            }

            // verifica se o numero já existe
            const roomExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomExistIds.some(roomExistId => roomExistId === roomId) 

            // se não existir, insere a sala no banco
            if(!isRoom) {
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}   
                )`) // inserção no db
            }
        }

        await db.close()
    
        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){ // para redirecionar o nº da sala vigente
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },

     enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}