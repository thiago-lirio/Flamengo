function fazGet(url) {
  let request = new XMLHttpRequest();

  request.open("GET", url, false);

  request.send();
  return request.responseText;
}

function criaInfoGoleiro(goleiro) {
  divInfoGoleiro = document.createElement("div");
  imagemGoleiro = document.createElement("img");
  nomeGoleiro = document.createElement("h4");
  imagemGoleiro.innerHTML = goleiro.image;
  nomeGoleiro.innerHTML = goleiro.name;

  divInfoGoleiro.appendChild(imagemGoleiro);
  divInfoGoleiro.appendChild(nomeGoleiro);

  return divInfoGoleiro;
}

function main() {
  let data = fazGet("https://flamengo-api.vercel.app/api/squad");
  let elenco = JSON.parse(data);
  console.log(elenco.players.keepers);
  let infoGoleiro = document.getElementById("infoGoleiro");

  //Para cada jogado colocar a imagem e o nome na tela

  elenco.players.keepers.forEach((element) => {
    let divInfoGoleiro = criaInfoGoleiro(element);
    infoGoleiro.appendChild(divInfoGoleiro);
    //   let
    //   imagemGoleiro.appendChild(linha);
  });
}

main();
