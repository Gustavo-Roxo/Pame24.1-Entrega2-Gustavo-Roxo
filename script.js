document.addEventListener('DOMContentLoaded', function () { 
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault() 
        var email = document.getElementById('email').value
        var senha = document.getElementById('password').value
        var butao = document.getElementById('checkbox').checked

        alert('Username: ' + email + '\nsenha: ' + senha + (butao ? '\nDados salvos' : '\nDados não salvos'))
    })
})