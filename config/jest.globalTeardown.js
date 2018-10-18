module.exports = async function() {
  await global.firebaseServer.close();
};
