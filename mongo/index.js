require("dotenv").config();
const { PORT } = process.env;
const api = require("./utils/api");

const {
  getPeliculas,
  createPelicula,
  deletePelicula
} = require("./controllers/Peliculas");

api.get("/api/peliculas/:id?", getPeliculas);
api.post("/api/peliculas", createPelicula);
api.delete("/api/peliculas/:id", deletePelicula);

api.listen(PORT, () => console.log(`server started on ${PORT}`));
