const { PELICULAS_COLLECTION_NAME } = process.env;
const { getCollection } = require("../utils/db/connect");

const getPeliculas = query =>
  new Promise((resolve, reject) =>
    getCollection(PELICULAS_COLLECTION_NAME)
      .then(peliculas =>
        peliculas.find(query).toArray((err, peliculas) => {
          if (err) throw err;
          resolve(peliculas);
        })
      )
      .catch(err => reject(err))
  );

const createPelicula = ({ body: pelicula }, response) => {
  peliculas.insertOne(pelicula.body, (err, result) => {
    if (err) throw err;

    response.json({
      success: true,
      message: "insertado correctamente."
    });
  });
};

const deletePelicula = ({ params: { id: _id } }, response) => {
  peliculas.findOneAndDelete({ _id: ObjectId(_id) }, (err, result) => {
    if (err) throw err;
    response.json(result);
  });
};

module.exports = {
  getPeliculas,
  createPelicula,
  deletePelicula
};
