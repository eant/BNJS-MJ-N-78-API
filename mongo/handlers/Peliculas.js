const express = require("express");
const router = express.Router();

const {
  getPeliculas,
  createPelicula,
  deletePelicula
} = require("../controllers/Peliculas");

router.get("/:id?", getPeliculas);
router.post("/", createPelicula);
router.delete("/:id", deletePelicula);

module.exports = router;
