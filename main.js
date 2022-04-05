function confereNumeroDeCartas() {
  let nCartas;
  while (true) {
    nCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    if (nCartas >= 4 && nCartas <= 14) {
      return nCartas;
    }
  }
}

function criaCartas (nCartas) {
  let lista = document.querySelector(".lista");
  for (let i = 0; i < nCartas; i++) {
    let item = document.createElement("li");
    let cartaFrente = document.createElement("div");
    let imgFrente = document.createElement('img');

    imgFrente.src = 'static/Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png';

    cartaFrente.classList.add('carta');
    cartaFrente.appendChild(imgFrente);

    item.appendChild(cartaFrente);
    lista.appendChild(item);
  }
}

window.addEventListener('load', function () {
  let nCartas = confereNumeroDeCartas();
  criaCartas(nCartas);
})