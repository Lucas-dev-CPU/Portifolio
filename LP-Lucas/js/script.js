document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    
    menuHamburguer.addEventListener('click', () => {
        toggleMenu();
    });

    function toggleMenu() {
        const nav = document.querySelector('.nav-responsive');
 // Certifique-se de usar a classe correta

        menuHamburguer.classList.toggle('change');

        if (menuHamburguer.classList.contains('change')) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
});


   // Função para formatar o número de telefone
function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (telefone.length <= 2) {
        return `(${telefone}`;
    } else if (telefone.length <= 5) {
        return `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    } else if (telefone.length <= 10) {
        return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`;
    } else {
        return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
    }
}

// Adiciona um listener para formatar o telefone enquanto o usuário digita
document.getElementById('phone').addEventListener('input', function(event) {
    this.value = formatarTelefone(this.value);
});

// Função para validar nome
function validarNome(nome) {
    const regexNome = /^([A-Za-zÀ-ÖØ-ÿ]+(?: [A-Za-zÀ-ÖØ-ÿ]+)+)$/;
    return regexNome.test(nome);
}

// Função para validar e-mail
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para validar número de telefone
function validarTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regexTelefone.test(telefone);
}

// Adiciona um listener ao evento submit do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('phone').value;

    if (!validarNome(nome)) {
        alert('Por favor, insira um nome completo válido com pelo menos dois nomes e apenas letras.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    if (!validarTelefone(telefone)) {
        alert('Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Se as validações passarem, o formulário é enviado
});