let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email') 
let assunto = window.document.querySelector('#assunto') 
let botao = window.document.querySelector('#botao')

let nomeOk
let emailOk
let assuntoOk

function validaNome() {
    if(nome.value.length < 3) {
        let textNome = window.document.querySelector('#textNome')
        
        textNome.innerHTML = 'Nome inválido!'
        nomeOk = false

    } else {
        textNome.innerHTML = 'Nome válido'
        nomeOk = true
    }
}

function validaEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        let textEmail = window.document.querySelector('#textEmail')

        textEmail.innerHTML = 'E-mail invalido!'
        emailOk = false

    } else {
        textEmail.innerHTML = 'E-mail valido!'
        emailOk = true
    }
}

function validaAssunto() {
    if(assunto.value.length >= 100) {
        let textAssunto = window.document.querySelector('#textAssunto')

        textAssunto.innerHTML = 'O texto ultrpassou 100 caracteres'
        assuntoOk = false

    } else {
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Mensagem enviada!')

    } else {
        alert('Preencha o formulário corretamente')
    }
}

