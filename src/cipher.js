window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, str) {
 
  let result = "";

  for (let i=0; i<str.length; i++) {

    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      let cipherFormUpperCase = ((str.charCodeAt(i) - 65 + offset) % 26) + 65;
      result += String.fromCharCode(cipherFormUpperCase); 

    } else if (str.charCodeAt(i) >=97 && str.charCodeAt(i) <= 122) {
      let cipherFormLowerCase = ((str.charCodeAt(i) - 97 + offset) % 26) + 97;
      result += String.fromCharCode(cipherFormLowerCase);

    } else {
      result += String.fromCharCode(str.charCodeAt(i));
    }
  }

  return result;
}

function decode(offset, msg) {
 
  let result = "";

  for (let i=0; i<msg.length; i++) {
    
    if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
      let decipherFormUpperCase = ((msg.charCodeAt(i) - 90 - offset) % 26) + 90;
      result += String.fromCharCode(decipherFormUpperCase); 

    } else if (msg.charCodeAt(i) >=97 && msg.charCodeAt(i) <= 122) {
      let decipherFormLowerCase = ((msg.charCodeAt(i) - 122 - offset) % 26) + 122;
      result += String.fromCharCode(decipherFormLowerCase);
      
    } else {
      result += String.fromCharCode(msg.charCodeAt(i));
    }
  }   
  return result;
}