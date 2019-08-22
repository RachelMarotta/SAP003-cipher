function takeText1() {
  event.preventDefault();
    let text = document.getElementById("text1").value;
    let desloc = Number(document.getElementById("desloc").value);
    let result = window.cipher.encode(text, desloc);

  document.getElementById("test").innerHTML = `${result}` ;
  }

function takeText2() {
  event.preventDefault();
    let text = document.getElementById("text1").value;
    let desloc = Number(document.getElementById("desloc").value);
    let result = window.cipher.decode(text, desloc);

  document.getElementById("test").innerHTML = `${result}` ;
}