const express = require("express");
const isEmpty = require("lodash.isempty");
const router = express.Router();

const {
  getPeliculas,
  createPelicula,
  deletePelicula
} = require("../controllers/Peliculas");

router.get("/:id?", ({ params: { id: _id } }, response) => {
  let query = {};

  if (!isEmpty(_id)) {
    query = { ...query, _id: ObjectId(_id) };
  }

  getPeliculas(query).then(pelis => response.json({ pelis }));
});

router.post("/", createPelicula);
router.delete("/:id", deletePelicula);

module.exports = router;
