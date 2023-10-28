$(document).ready(function() {

    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true,
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true,
            },
            cpf: {
                required: true,
            },
        },   
    })
})  