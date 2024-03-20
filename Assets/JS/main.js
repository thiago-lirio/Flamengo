function fazGet(url) {
  let request = new XMLHttpRequest();

  request.open("GET", url, false);

  request.send();
  return request.responseText;
}

function main() {
  console.log(fazGet("https://flamengo-api.vercel.app/api/squad"));
}

main();
