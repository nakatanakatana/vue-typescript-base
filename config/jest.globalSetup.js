const FirebaseServer = require('firebase-server');

const firebaseTestData = require('../firebaseTestData.json');
const firebaseRules = require('../firebaseRules');

module.exports = function() {
  global.firebaseServer = new FirebaseServer(5000, '0.0.0.0', firebaseTestData);
  firebaseServer.setRules(firebaseRules);
};
