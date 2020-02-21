const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/token", (req, res) => {
  const { user, passwd } = req.body;

  // collection.find()

  const token = jwt.sign(
    {
      sub: "fake-sub",
      role: "admin"
    },
    "supersecretkey",
    { expiresIn: "3 hours" }
  );

  res.json({
    success: true,
    token
  });
});

module.exports = router;
