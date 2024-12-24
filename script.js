// Criar neve caindo
function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflakes, 100);

// escrevendo texto
const texto = "Gilson deseja a você um Feliz Natal.";
const elemento = document.getElementById('mensagem');
let i = 0;

function escreverTexto() {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escreverTexto, 100);  // Velocidade de digitação (100ms)
    }
}

window.onload = escreverTexto;



// /* 2 tela - aparecendo mensagem de natal */
const botao = document.getElementById('botao');
        botao.addEventListener('click', () => {
            // Redireciona para a página da mensagem
            window.location.href = 'mensagemNatal.html';
        });
