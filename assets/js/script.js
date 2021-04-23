let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email') 
let assunto = window.document.querySelector('#assunto') 
let botao = window.document.querySelector('#botao')

let nomeOk
let emailOk
let assuntoOk

function validaNome() {
    let textNome = window.document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        
        textNome.innerHTML = 'Nome inválido!'
        nomeOk = false

    } else {
        textNome.innerHTML = 'Nome válido'
        nomeOk = true
    }
}

function validaEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        let textEmail = window.document.querySelector('#txtEmail')

        textEmail.innerHTML = 'E-mail inválido!'
        emailOk = false

    } else {
        textEmail.innerHTML = 'E-mail válido!'
        emailOk = true
    }
}

function validaAssunto() {
    if(assunto.value.length >= 100) {
        let textAssunto = window.document.querySelector('#txtAssunto')

        textAssunto.innerHTML = 'O texto ultrapassou 100 caracteres'
        assuntoOk = false

    } else {
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk && emailOk && assuntoOk) {
        alert('Mensagem enviada!')

    } else {
        alert('Preencha o formulário corretamente')
    }
}

