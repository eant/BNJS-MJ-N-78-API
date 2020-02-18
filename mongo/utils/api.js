const cors = require("cors");
const express = require("express");

const peliculas = require("../handlers/Peliculas");
const users = require("../handlers/users");

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json());

api.use(cors());

api.use("/api/v1/peliculas", peliculas);
api.use("/api/v1/users", users);

module.exports = api;
