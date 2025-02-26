// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let amigoAgregado = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let amigoSecreto1 = document.getElementById('resultado');

function agregarAmigo(){
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("sortear").removeAttribute("disabled");
    if(amigoAgregado.value == ''){
        alert('El campo esta vacio, agregue un amigo para continuar');
        
    }else if(listaAmigos.includes(amigoAgregado.value)){
        alert('Ese nombre ya fue ingresado, intente con uno nuevo');
    }else{
        listaAmigos.push(amigoAgregado.value);
        console.log(listaAmigos);
        listaDeAmigos();
        amigoAgregado.value = '';
    }
}

function listaDeAmigos(){
    lista.innerHTML += `<li>${amigoAgregado.value}</li>`;
}

function sortearAmigo(){
    if(listaAmigos.length >= 1){
        let indice = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = listaAmigos[indice];
        console.log(indice);
        console.log(amigoSecreto);
        amigoSecreto1.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    }else{
        alert("Necesitas agregar al menos un amigo");
        document.getElementById("sortear").setAttribute("disabled", "true");
    }
}

function reiniciarJuego(){
    listaAmigos = [];
    lista.innerHTML = "";
    amigoSecreto1.innerHTML="";
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}




