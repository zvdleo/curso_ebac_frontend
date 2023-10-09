const form = document.getElementById('form-numericos');
let formEValido = false;

function validaNumero(numeroA, numeroB) {
    if (parseFloat(numeroB.value) > parseFloat(numeroA.value)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-A');
    const numeroB = document.getElementById('numero-B');

    const mensagemSucesso = `Parabéns! O número B <b>${numeroB.value}</b> é maior que o número A: <b>${numeroA.value}</b>`;
    const mensagemErro = `Validação inválida! O número B tem que ser maior que o número A.`;

    if (validaNumero(numeroA, numeroB)) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector(' .error-message').style.display = 'none';
        numeroB.style.border = ''
        numeroA.value = '';
        numeroB.value = '';
    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

    
    }
})

console.log(form);


