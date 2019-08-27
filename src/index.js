document.getElementById("btn-clicar1").addEventListener("click", takeText1);

function takeText1() {
  event.preventDefault();
  let text = document.getElementById("text1").value;
  let desloc = Number(document.getElementById("desloc").value);
  let result = window.cipher.encode(desloc, text);

  document.getElementById("textCipher").innerHTML = `${result}` ;
}

document.getElementById("btn-clicar2").addEventListener("click", takeText2);

function takeText2() {
  event.preventDefault();
  let text = document.getElementById("text1").value;
  let desloc = Number(document.getElementById("desloc").value);
  let result = window.cipher.decode(desloc, text);

  document.getElementById("textCipher").innerHTML = `${result}`;
}
