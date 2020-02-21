const express = require("express");

const peliculas = require("../controllers/peliculas");

const router = express.Router();

router.get("/:id?", async ({ params: { id: _id } }, response) => {
  const result = await peliculas.get(_id);

  response.json({ result });
});

router.post("/", async ({ body: pelicula }, response) => {
  const result = await peliculas.insert(pelicula);

  response.json({
    success: true,
    message: "insertado correctamente.",
    result
  });
});

router.delete("/:id", async ({ params: { id } }, response) => {
  const result = await peliculas.remove(id);
  response.json(result);
});

module.exports = router;
