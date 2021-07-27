// exportando para main.js a função de abrir e fechar a modal
export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
    modalWrapper.classList.add("active") // atribui a classe active da modal
    }
    function close(){
    modalWrapper.classList.remove("active")// remove a classe active da modal
    }
    return{
        open,
        close
    }

}