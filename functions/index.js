const functions = require("firebase-functions");
const app = require("./app/index.js");

exports.api_personal = functions.https.onRequest(app);
