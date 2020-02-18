const getUser = () =>
  new Promise((resolve, reject) => {
    try {
      resolve({
        id: 1,
        username: "Pepe"
      });
    } catch (e) {
      reject(e);
    }
  });

module.exports = { getUser };
