const express = require("express");
const expressjwt = require("express-jwt");

const router = express.Router();

const Peliculas = require("../controllers/Peliculas");

const jwtCheck = expressjwt({
  secret: "mysupersecretkey"
});

router.get("/:id?", jwtCheck, async ({ params: { id: _id } }, response) => {
  const peliculas = await Peliculas.get(_id);

  response.json(peliculas);
});

// router.post("/", createPelicula);
// router.delete("/:id", deletePelicula);

module.exports = router;
