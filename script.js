// Função para verificar a data de aniversário
document.addEventListener("DOMContentLoaded", () => {
    const birthdayInput = document.getElementById("birthday");
    const verifyDateButton = document.getElementById("verify-date");

    if (verifyDateButton) {
        verifyDateButton.addEventListener("click", () => {
            const birthday = birthdayInput.value.trim();
            if (birthday === "12-01") {
                window.location.href = "name.html"; // Navega para a página do nome
            } else {
                alert("Tenho certeza que ta certo, tenta de novo.");
            }
        });
    }

    const nameInput = document.getElementById("name");
    const verifyNameButton = document.getElementById("verify-name");

    if (verifyNameButton) {
        verifyNameButton.addEventListener("click", () => {
            const name = nameInput.value.trim().toUpperCase(); // Converte para maiúsculas
            if (name === "ELOISE") {
                window.location.href = "bolinho.html"; // Navega para a mensagem final
            } else {
                alert("AI. O que foi que você escreveu aqui????");
            }
        });
    }
});

// Criar balões
// Criar balões
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.setProperty('--random-offset', Math.random() * 360 + 'deg');
    
    const balloonBody = document.createElement('div');
    balloonBody.className = 'balloon-body';
    
    const balloonString = document.createElement('div');
    balloonString.className = 'balloon-string';
    
    balloon.appendChild(balloonBody);
    balloon.appendChild(balloonString);
    document.body.appendChild(balloon);

    // Adiciona o evento de clique para estourar o balão
    balloon.addEventListener('click', () => {
        balloonBody.style.background = 'transparent'; // Altera a cor para indicar que estourou
        balloonString.style.height = '0'; // Remove a corda do balão
        balloon.style.transform = 'scale(0)'; // Faz o balão desaparecer
        setTimeout(() => {
            balloon.remove(); // Remove o balão da tela
        }, 500); // Espera o tempo da animação
    });

    // Configura a remoção automática do balão depois de 8 segundos
    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

// Gerar balões periodicamente
setInterval(createBalloon, 1000);

// Criar alguns balões iniciais
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        createBalloon();
    }, i * 200);
}

