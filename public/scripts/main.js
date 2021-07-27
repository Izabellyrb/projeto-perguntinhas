import  Modal from './modal.js'

const modal = Modal() // modal 

const modalTitle = document.querySelector('.modal h2') // titulo da modal
const modalDescription = document.querySelector('.modal p') // frase da modal
const modalButton = document.querySelector('.modal button') // botão da modal

// pegar todos os botões que existe com a class "check"
const checkButton = document.querySelectorAll(".actions a.check")

// para cada botão reconhecido como check que for clicado, executar a função handleClick
checkButton.forEach(button => {
    button.addEventListener("click", handleClick)
})

// pegar todos os botões que existe com a class "delete"
const deleteButton = document.querySelectorAll(".actions a.delete")

// para cada botão reconhecido como delete que for clicado, executar a função handleClick como false
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

// alterar os dados da modal de acordo com question e botão clicados
function handleClick(event, check = true) {

    const slug = check ? "check" : "delete" // buscar no form qual a action acionada (check/delete)
    const roomId = document.querySelector("#room-id").dataset.id // buscar qual a sala da pergunta selecionada
    const questionId = event.target.dataset.id // buscar qual a pergunta selecionada

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir essa pergunta"
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar essa pergunta como lida?" : "Tem certeza que deseja excluir essa pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open() // abrir a modal
    
    event.preventDefaut() // para não alterar a URL ao clicar nos botões 
}

