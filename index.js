
const { conexion } = require('./basededatos/conexion.js');
const express = require("express");
const cors = require("cors");

const Articulo = require('./modelo/articulos');

//inicializador de APP
//console.log("mi api rest arrancada");

// inicializar la BS
conexion();

//crear un servidor node
const app = express();
const puerto = 3900;

// configurar los cors
app.use(cors());

//convertir body a objeto js
app.use(express.json());

//escuchar peticiones del servidor
app.listen(puerto, ()=>{
    console.log("Sevidor corriendo en el puerto " + puerto);
})

app.get("/probando", (req,res)=>{
    console.log("se ha ejecutado  el endpibt probando")
    return res.status(200).send(`
        <div>
        <h1> probando nuestra ruta en nodejs</h1>
        <p> creando api res con node </P>

        </div>
        `);
})

//crear rutas  tarea hacer baquen /, insertar borrar modificar actualizar 
// Obtener todos los artículos
app.get("/articulos", async (req, res) => {
    try {
        const articulos = await Articulo.find();
        res.status(200).json(articulos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los artículos" });
    }
});

// Insertar un nuevo artículo
app.post("/articulos", async (req, res) => {
    try {
        const nuevoArticulo = new Articulo(req.body);
        const articuloGuardado = await nuevoArticulo.save();
        res.status(201).json(articuloGuardado);
    } catch (error) {
        res.status(500).json({ message: "Error al guardar el artículo" });
    }
});

// Actualizar un artículo existente
app.put("/articulos/:id", async (req, res) => {
    try {
        const articuloActualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(articuloActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el artículo" });
    }
});

// Eliminar un artículo
app.delete("/articulos/:id", async (req, res) => {
    try {
        await Articulo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Artículo eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el artículo" });
    }
});