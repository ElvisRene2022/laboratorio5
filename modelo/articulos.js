const mongoose = require("mongoose");

const articuloSchema = new mongoose.Schema({}, { strict: false });

const Articulo = mongoose.model("Articulo", articuloSchema);

module.exports = Articulo;

