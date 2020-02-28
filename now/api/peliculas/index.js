const myEndpoint = (req, res) => {
  return res.json({
    success: true,
    message: "peliculas success"
  });
};

module.exports = myEndpoint;
