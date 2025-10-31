
function mudarCor(){
    //obter o elemento quadrado
    let quadrado = document.getElementById('quadrado')
    
    //modificando elemento
    quadrado.style.backgroundColor = 'red'
}
function mudarForma(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.borderRadius = '50%'
}
function voltar(){
    quadrado = document.getElementById('quadrado')
    quadrado.style.backgroundColor = 'lightblue'
    quadrado.style.borderRadius = '0'
}
function diminuir(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.width = '100px'
    quadrado.style.height = '100px'
}
function aumentar(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.width = '500px'
    quadrado.style.height = '500px'
}
function girar(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.transform = 'rotate(40deg)'
}
// variáveis globais de controle
let surpresaIntervalId = null;
let surpresaTimeoutId = null;

function pararSurpresa(quadrado) {
    if (surpresaIntervalId) {
        clearInterval(surpresaIntervalId);
        surpresaIntervalId = null;
    }
    if (surpresaTimeoutId) {
        clearTimeout(surpresaTimeoutId);
        surpresaTimeoutId = null;
    }
    quadrado.style.transition = 'none';
    quadrado.style.transform = 'none';
    quadrado.style.backgroundColor = 'lightblue'; // volta à cor original
}

/**
 * Faz o quadrado girar, mover e mudar de cor por 5 segundos.
 */
function surpresa(){
    let quadrado = document.getElementById('quadrado')
    
    // Se já estiver rodando, interrompe.
    if (surpresaIntervalId) {
        pararSurpresa(quadrado);
        return;
    }
    
    quadrado.style.transition = 'transform 0.1s linear';

    let rot = 0;
    let offsetX = 0;
    let direction = 1;

    // Função para gerar cor aleatória
    function corAleatoria() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Inicia a animação
    surpresaIntervalId = setInterval(() => {
        rot += 15;
        offsetX += direction * 8;

        if (offsetX > 300 || offsetX < -300) {
            direction *= -1;
        }

        quadrado.style.transform = `translateX(${offsetX}px) rotate(${rot}deg)`;
        quadrado.style.backgroundColor = corAleatoria(); // muda a cor constantemente
    }, 100); // atualiza a cada 100ms

    // Para automaticamente após 5 segundos
    surpresaTimeoutId = setTimeout(() => {
        pararSurpresa(quadrado);
    }, 5000);
}



