const nameChangedHandler = (e) => {
  e.preventDefault();
  var letras =
    "abcdefghijklmnñopqrstuvwxyzABCDEFGJHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚ ";

  const str = e.target.value;
  var aux = e.target.selectionStart;
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (letras.indexOf(String.fromCharCode(charCode)) !== -1) {
      if (str.charCodeAt(i) !== 32) {
        if (str.charCodeAt(i - 1) === 32 || i === 0) {
          newStr = newStr + String.fromCharCode(charCode).toUpperCase();
        } else {
          newStr = newStr + String.fromCharCode(charCode).toLowerCase();
        }
      } else if (str.charCodeAt(i - 1) !== 32) {
        newStr = newStr + String.fromCharCode(charCode);
      }
    }
  }

  e.target.value = newStr;
  e.target.selectionStart = aux;
  e.target.selectionEnd = aux;

  //validamos la longitud del texto
  let lenght = e.target.value.trim().length;
  if (lenght < 8) {
    e.target.setCustomValidity(
      "Alarga el texto a 8 o mas carácteres (actualmente, usas " +
        lenght +
        " caracteres)"
    );
  } else {
    e.target.setCustomValidity("");
  }
};

const user_nameChangedHandler = (e) => {
  e.preventDefault();
  var letras = "abcdefghijklmnñopqrstuvwxyz1234567890";

  const str = e.target.value;
  var aux = e.target.selectionStart;
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (letras.indexOf(String.fromCharCode(charCode)) !== -1) {
      newStr = newStr + String.fromCharCode(charCode).toLowerCase();
    }
  }

  e.target.value = newStr;
  e.target.selectionStart = aux;
  e.target.selectionEnd = aux;

  //validamos la longitud del texto
  let lenght = e.target.value.trim().length;
  if (lenght < 8) {
    e.target.setCustomValidity(
      "Alarga el texto a 8 o mas carácteres (actualmente, usas " +
        lenght +
        " caracteres)"
    );
  } else {
    e.target.setCustomValidity("");
  }
};

const onChangeNumber = (e) => {
  e.preventDefault();
  var letras = "1234567890";

  const str = e.target.value;
  var aux = e.target.selectionStart;
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (letras.indexOf(String.fromCharCode(charCode)) !== -1) {
      if (str.charCodeAt(i - 1) === 32 || i === 0) {
        newStr = newStr + String.fromCharCode(charCode).toUpperCase();
      } else {
        newStr = newStr + String.fromCharCode(charCode).toLowerCase();
      }
    }
  }

  e.target.value = newStr;
  e.target.selectionStart = aux;
  e.target.selectionEnd = aux;
};

export { nameChangedHandler, user_nameChangedHandler, onChangeNumber };
