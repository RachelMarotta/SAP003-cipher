window.cipher = {
  encode: encode,
  decode: decode,
  };

function encode(str, offset) {
 let result = '';

  for (let i=0; i<str.length; i++) {
    let cipherForm = ((str.charCodeAt(i) - 65 + offset) % 26) + 65;
      result += String.fromCharCode(cipherForm);  
  }   
  return result;
}

function decode(msg, offset) {
 let result = '';

  for (let i=0; i<msg.length; i++) {
    let decipherForm = ((msg.charCodeAt(i) - 90 - offset) % 26) + 90;
      result += String.fromCharCode(decipherForm);  
  }   
  return result;
}

