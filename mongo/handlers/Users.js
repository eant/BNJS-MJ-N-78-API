const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

const getUser = require("../controllers/Users").getUser;

router.post("/login", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("You need a user name and passwd");
    return;
  }

  const user = await getUser();

  if (!user) {
    res.status(401).send("User not found");
  }

  const token = jwt.sign(
    {
      sub: user.id,
      username: user.username
    },
    "mysupersecretkey",
    { expiresIn: "3 hours" }
  );

  res.status(200).send({ access_token: token });
});

module.exports = router;
