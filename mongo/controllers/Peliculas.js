const isEmpty = require("lodash.isempty");
const { PELICULAS_COLLECTION_NAME } = process.env;
const { getCollection } = require("../utils/db/connect");

const getPeliculas = ({ params: { id: _id } }, response) => {
  let query = {};

  if (!isEmpty(_id)) {
    query = { ...query, _id: ObjectId(_id) };
  }

  getCollection(PELICULAS_COLLECTION_NAME).then(peliculas =>
    peliculas.find(query).toArray((err, result) => {
      if (err) throw err;
      response.json({ result });
    })
  );
};

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
