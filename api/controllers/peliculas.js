const isEmpty = require("lodash.isempty");

const { getCollection, ObjectId } = require("../utils/db/mongoConnect.js");

const get = _id =>
  new Promise(async (resolve, reject) => {
    const collection = await getCollection("peliculas");

    let query = {};

    if (!isEmpty(_id)) {
      query = { ...query, _id: ObjectId(_id) };
    }

    try {
      collection.find(query).toArray((err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });

const insert = pelicula =>
  new Promise(async (resolve, reject) => {
    const collection = await getCollection("peliculas");

    try {
      collection.insertOne(pelicula, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });

const remove = id =>
  new Promise(async (resolve, reject) => {
    const collection = await getCollection("peliculas");

    try {
      collection.findOneAndDelete({ _id: ObjectId(id) }, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });

module.exports = { get, insert, remove };
