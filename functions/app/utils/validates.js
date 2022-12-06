const { keysRequired } = require("./index");

module.exports = {
  isExistData: (payload) => {
    if (!payload || !Object.keys(payload).length)
      throw {
        message: `La entidad no puede ser nula o indefinida`,
        title: "Validate",
        statusCode: 400,
      };
  },
  isDataInObject: (payload, arrRequireds) => {
    var _payloadArr = Object.keys(payload).map((key) => ({ [key]: payload[key] }));
    if (arrRequireds && arrRequireds.length) {
      _payloadArr = _payloadArr.filter((item) =>
        arrRequireds.some((arrItem) => arrItem === Object.keys(item)[0])
      );
    }
    var field = "";
    const hasData = _payloadArr.every((item) => {
      const hasValue = Object.values(item)[0];
      if (!hasValue) field = Object.keys(item)[0];
      return hasValue;
    });
    if (!hasData)
      throw {
        message: `El campo ${field} no es válido`,
        title: "Validate",
        statusCode: 400,
      };
  },
  hasAllProperties: (payload, arrRequireds) => {
    var field = "";
    const _keysRequired = arrRequireds || keysRequired;
    const hasKeys = _keysRequired.every((key) => {
      const hasKey = Object.keys(payload).includes(key);
      if (!hasKey) field = key;
      return hasKey;
    });
    if (!hasKeys)
      throw {
        message: `El campo ${field} está ausente`,
        title: "Validate",
        statusCode: 400,
      };
  },
  isProperty: (obj, key) => {
    if (!obj.hasOwnProperty(key))
      throw {
        message: "Intentando acceder a recurso no existente.",
        title: "Validate",
        statusCode: 400,
      };
  },
};
