// script.js feito com inteligência artificial, pois o especialista n está no momento ativo
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark_mode');

    // Alterar o texto do botão conforme o modo
    if (body.classList.contains('dark_mode')) {
        toggleButton.textContent = 'Desativar Modo Noturno';
    } else {
        toggleButton.textContent = 'Ativar Modo Noturno';
    }
});

