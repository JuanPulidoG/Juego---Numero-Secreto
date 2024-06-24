let numeroSecreto = generarNUmeroSecreto();
let intentos = 1;
console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNUmeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
    
}

asignarTextoElemento('h1', 'Juego del numero Secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');