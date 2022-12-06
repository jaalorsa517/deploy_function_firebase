module.exports = {
  keysRequired: ["identificacionCliente", "numeroPoliza", "codigoRamo"],
  decodeBase64: (data) => {
    const buff = new Buffer(data, "base64");
    return buff.toString("ascii");
  },
  addString: (str, num) => {
    const deleteLast = str.slice(0, -3);
    return "".concat(deleteLast, num);
  },
  replaceString: (str, value, pattern = "??") => {
    const aux = str;
    return aux.replace(pattern, value);
  },
  fillString: (num, pos = 3) => {
    const str = num.toString();
    if (str.length < pos) {
      return module.exports.fillString("0".concat(str));
    }
    return str;
  },
};
