document.addEventListener('DOMContentLoaded', function () { 
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault() 
        var email = document.getElementById('email').value
        var senha = document.getElementById('password').value
        var botao = document.getElementById('checkbox').checked

        alert('Email: ' + email + '\nsenha: ' + senha + (botao ? '\nDados salvos' : '\nDados não salvos'))
    })
})
