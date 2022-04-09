let cartas = [];
let cartasEscolhidas = [];
let cartaAnterior = null
let acertos = []
let nJogadas = 0

let contCliques = 0

function confereNumeroDeCartas() {
  let nCartas;
  while (true) {
    nCartas = Number(prompt('Com quantas cartas você quer jogar? (4~14)'));
    if (nCartas >= 4 && nCartas <= 14 && nCartas % 2 === 0) {
      return nCartas;
    }
  }
}

function criaCartas () {
  let cont1 = 1
  let cont2 = 0
  for (let i = 0; i < 14; i++) {
    let item = document.createElement("li");
    let cartaFrente = document.createElement("div");
    let cartaTras = document.createElement("div");
    let imgFrente = document.createElement('img');
    let imgTras = document.createElement('img');

    imgTras.src = `static/Arquivos Úteis - Projeto 04 - Parrot Card Game/gif${cont1}.gif`;
    cont2 ++;
    if (cont2 % 2 == 0) {
      cont1 ++;
    }

    imgFrente.src = "static/Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png"

    cartaFrente.classList.add('carta', 'back');
    cartaFrente.appendChild(imgFrente);

    cartaTras.classList.add('carta', 'front');
    cartaTras.appendChild(imgTras);


    item.appendChild(cartaTras);
    item.appendChild(cartaFrente);

    item.setAttribute('onclick', 'cliqueCarta(this)')
    item.classList.add('item')
    cartas[i] = item;
  }
}

function exibeCartas(nCartas) {
  for (let i = 0; i < nCartas; i++) {
    cartasEscolhidas[i] = cartas[i];
  }

  cartasEscolhidas.sort(function() {
    return Math.random() - 0.5;
  })

  for (let i = 0; i < nCartas; i++) {
    document.querySelector('.lista').appendChild(cartasEscolhidas[i])
  }
}

function fimDeJogo() {
  let totalIntens = document.querySelectorAll('li')
  let totalCartasViradas = document.querySelectorAll('.flip')
  if (totalCartasViradas.length === totalIntens.length) {
    let main = document.querySelector('main');
    let telaFinal = document.querySelector('.fim-de-jogo');
    main.classList.add('opaco');
    telaFinal.classList.remove('display-none');
    telaFinal.querySelector('h3').innerHTML = `Você ganhou em ${nJogadas} jogadas`
  }
}

function cliqueCarta(elemento) {
  for(let i = 0; i < acertos.length; i++) {
    if (elemento === acertos[i]) {
      return true
    }
  }

  if (cartaAnterior === null) {
    elemento.classList.add('flip');
    cartaAnterior = elemento;
  }
  else {
    if (cartaAnterior.querySelector('.front img').src === elemento.querySelector('.front img').src && elemento !== cartaAnterior) {
    elemento.classList.add('flip');
    acertos.push(elemento);
    cartaAnterior.classList.add('flip');
    acertos.push(cartaAnterior);
    cartaAnterior = null
    }
    else {
      elemento.classList.add('flip')
      
      setTimeout(function() {
        elemento.classList.remove('flip');
        cartaAnterior.classList.remove('flip');
        cartaAnterior = null
      }, 1000);
    }  
  }
  nJogadas++;

  setTimeout(function () {
    fimDeJogo()
  }, 500)
}

window.addEventListener('load', function () {
  let nCartas = confereNumeroDeCartas();

  criaCartas();
  exibeCartas(nCartas);
}) 