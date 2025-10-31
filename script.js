
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
function mudarCor(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.backgroundColor = 'red'
}

function mudarForma(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.borderRadius = '50%'
}

function voltar(){
    let quadrado = document.getElementById('quadrado')
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

function mudarCor(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.backgroundColor = 'red'
}

function mudarForma(){
    let quadrado = document.getElementById('quadrado')
    quadrado.style.borderRadius = '50%'
}

function voltar(){
    let quadrado = document.getElementById('quadrado')
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

// variável global de controle
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
}

/**
 * Faz o quadrado girar e se mover pela tela por 5 segundos.
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

    // Inicia a animação
    surpresaIntervalId = setInterval(() => {
        rot += 15;
        offsetX += direction * 8;

        if (offsetX > 300 || offsetX < -300) {
            direction *= -1;
        }

        quadrado.style.transform = `translateX(${offsetX}px) rotate(${rot}deg)`;
    }, 50);

    // Para automaticamente após 5 segundos
    surpresaTimeoutId = setTimeout(() => {
        pararSurpresa(quadrado);
    }, 5000);
}

