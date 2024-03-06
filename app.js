let listaNumerosSorteados = [];
let numeroSecreto;
console.log(numeroSecreto);
let intentos = 1;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon los numeros maximos posibles\n Presione F5')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


    

}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    //vover a lo inicial
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();
