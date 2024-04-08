function fazGet(url) {
  let request = new XMLHttpRequest();

  request.open("GET", url, false);

  request.send();
  return request.responseText;
}

//cria os goleiros
function criaInfoGoleiro(goleiro) {
  divInfoGoleiro = document.createElement("div");
  imagemGoleiro = document.createElement("img");
  nomeGoleiro = document.createElement("h4");

  divInfoGoleiro.setAttribute("class", "column jogador");
  imagemGoleiro.setAttribute("src", goleiro.image);
  imagemGoleiro.innerHTML = goleiro.name;
  nomeGoleiro.innerHTML = goleiro.name;

  divInfoGoleiro.appendChild(imagemGoleiro);
  divInfoGoleiro.appendChild(nomeGoleiro);

  return divInfoGoleiro;
}

function criaInfoZagueiro(zagueiro) {
  divInfoZagueiro = document.createElement("div");
  imagemZagueiro = document.createElement("img");
  nomeZagueiro = document.createElement("h4");

  divInfoZagueiro.setAttribute("class", "column jogador");
  imagemZagueiro.setAttribute("src", zagueiro.image);
  imagemZagueiro.innerHTML = zagueiro.name;
  nomeZagueiro.innerHTML = zagueiro.name;

  divInfoZagueiro.appendChild(imagemZagueiro);
  divInfoZagueiro.appendChild(nomeZagueiro);

  return divInfoZagueiro;
}

function criaInfoLateralDireito(lateralDireito) {
  divInfoLateralDireito = document.createElement("div");
  imagemLateralDireito = document.createElement("img");
  nomeLateralDireito = document.createElement("h4");

  divInfoLateralDireito.setAttribute("class", "column jogador");
  imagemLateralDireito.setAttribute("src", lateralDireito.image);
  imagemLateralDireito.innerHTML = lateralDireito.name;
  nomeLateralDireito.innerHTML = lateralDireito.name;

  divInfoLateralDireito.appendChild(imagemLateralDireito);
  divInfoLateralDireito.appendChild(nomeLateralDireito);

  return divInfoLateralDireito;
}

function criaInfoLateralEsquerdo(lateralEsquerdo) {
  divInfoLateralEsquerdo = document.createElement("div");
  imagemLateralEsquerdo = document.createElement("img");
  nomeLateralEsquerdo = document.createElement("h4");

  divInfoLateralEsquerdo.setAttribute("class", "column jogador");
  imagemLateralEsquerdo.setAttribute("src", lateralEsquerdo.image);
  imagemLateralEsquerdo.innerHTML = lateralEsquerdo.name;
  nomeLateralEsquerdo.innerHTML = lateralEsquerdo.name;

  divInfoLateralEsquerdo.appendChild(imagemLateralEsquerdo);
  divInfoLateralEsquerdo.appendChild(nomeLateralEsquerdo);

  return divInfoLateralEsquerdo;
}

function criaInfoVolante(volante) {
  divInfoVolante = document.createElement("div");
  imagemVolante = document.createElement("img");
  nomeVolante = document.createElement("h4");

  divInfoVolante.setAttribute("class", "column jogador");
  imagemVolante.setAttribute("src", volante.image);
  imagemVolante.innerHTML = volante.name;
  nomeVolante.innerHTML = volante.name;

  divInfoVolante.appendChild(imagemVolante);
  divInfoVolante.appendChild(nomeVolante);

  return divInfoVolante;
}

function criaInfoMeia(meia) {
  divInfoMeia = document.createElement("div");
  imagemMeia = document.createElement("img");
  nomeMeia = document.createElement("h4");

  divInfoMeia.setAttribute("class", "column jogador");
  imagemMeia.setAttribute("src", meia.image);
  imagemMeia.innerHTML = meia.name;
  nomeMeia.innerHTML = meia.name;

  divInfoMeia.appendChild(imagemMeia);
  divInfoMeia.appendChild(nomeMeia);

  return divInfoMeia;
}

function criaInfoAtacante(atacante) {
  divInfoAtacante = document.createElement("div");
  imagemAtacante = document.createElement("img");
  nomeAtacante = document.createElement("h4");

  divInfoAtacante.setAttribute("class", "column jogador");
  imagemAtacante.setAttribute("src", atacante.image);
  imagemAtacante.innerHTML = atacante.name;
  nomeAtacante.innerHTML = atacante.name;

  divInfoAtacante.appendChild(imagemAtacante);
  divInfoAtacante.appendChild(nomeAtacante);

  return divInfoAtacante;
}

function main() {
  let data = fazGet("https://flamengo-api.vercel.app/api/squad");
  let elenco = JSON.parse(data);
  console.log(elenco.players);
  let infoGoleiro = document.getElementById("infoGoleiro");
  let infoZagueiro = document.getElementById("infoZagueiro");
  let infoLateralDireito = document.getElementById("infoLateralDireito");
  let infoLateralEsquerdo = document.getElementById("infoLateralEsquerdo");
  let infoVolante = document.getElementById("infoVolante");
  let infoMeia = document.getElementById("infoMeia");
  let infoAtacante = document.getElementById("infoAtacante");

  //Para cada goleiro colocar a imagem e o nome na tela
  elenco.players.keepers.forEach((element) => {
    let divInfoGoleiro = criaInfoGoleiro(element);
    infoGoleiro.appendChild(divInfoGoleiro);
  });

  elenco.players.centerBacks.forEach((element) => {
    let divInfoZagueiro = criaInfoZagueiro(element);
    infoZagueiro.appendChild(divInfoZagueiro);
  });

  elenco.players.rightBacks.forEach((element) => {
    let divInfoLateralDireito = criaInfoLateralDireito(element);
    infoLateralDireito.appendChild(divInfoLateralDireito);
  });

  elenco.players.leftBacks.forEach((element) => {
    let divInfoLateralEsquerdo = criaInfoLateralEsquerdo(element);
    infoLateralEsquerdo.appendChild(divInfoLateralEsquerdo);
  });

  elenco.players.midfielders.forEach((element) => {
    let divInfoVolante = criaInfoVolante(element);
    infoVolante.appendChild(divInfoVolante);
  });

  elenco.players.attackMidfielders.forEach((element) => {
    let divInfoMeia = criaInfoMeia(element);
    infoMeia.appendChild(divInfoMeia);
  });

  elenco.players.strikers.forEach((element) => {
    let divInfoAtacante = criaInfoAtacante(element);
    infoAtacante.appendChild(divInfoAtacante);
  });
}

main();
