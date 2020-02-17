const express = require("express");
const router = express.Router();

const Peliculas = require("../controllers/Peliculas");

router.get("/:id?", async ({ params: { id: _id } }, response) => {
  const peliculas = await Peliculas.get(_id);

  response.json(peliculas);
});

// router.post("/", createPelicula);
// router.delete("/:id", deletePelicula);

module.exports = router;
