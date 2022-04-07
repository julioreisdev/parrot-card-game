let cartas = [];

function confereNumeroDeCartas() {
  let nCartas;
  while (true) {
    nCartas = Number(prompt('Com quantas cartas você quer jogar?'));
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
    cont2 ++
    if (cont2 % 2 == 0) {
      cont1 ++
    }

    imgFrente.src = "static/Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png"

    cartaFrente.classList.add('carta', 'back')
    cartaFrente.appendChild(imgFrente)

    cartaTras.classList.add('carta')
    cartaTras.appendChild(imgTras)


    item.appendChild(cartaTras)
    item.appendChild(cartaFrente);
    cartas[i] = item
  }
}

function virarCarta() {
  let itens = document.querySelectorAll('li')
  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function () {
      itens[i].classList.toggle('flip')
    })
  }
}

window.addEventListener('load', function () {
  let nCartas = confereNumeroDeCartas();
  criaCartas();
  
  for (let i = 0; i < nCartas; i++) {
    document.querySelector('.lista').appendChild(cartas[i])
  }

  virarCarta()
}) 