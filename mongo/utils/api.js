const cors = require("cors");
const express = require("express");
const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json());
api.use(cors());

module.exports = api;
