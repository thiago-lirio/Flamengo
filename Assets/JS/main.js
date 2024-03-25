function fazGet(url) {
  let request = new XMLHttpRequest();

  request.open("GET", url, false);

  request.send();
  return request.responseText;
}

function main() {
  console.log(fazGet("test_1486f2594acc6214a966564ed48b47"));
}

main();
