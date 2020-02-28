const myEndpoint = (req, res) => {
  return res.json({
    success: true,
    message: "login success"
  });
};

module.exports = myEndpoint;
