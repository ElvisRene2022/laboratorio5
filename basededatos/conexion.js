
const moongoose = require("mongoose")

const conexion = async()=> {
    console.log("conexio correctamente")
    try {
        /*await mongoose.connect("mongodb+srv://helvisrene1:Rene-2025@cluster0.chwku.mongodb.net/Mi_blog?retryWrites=true&w=majority&appName=Cluster0");*/
        await moongoose.connect("mongodb://localhost:27017/mi_blog")
        console.log("conectado correctamente a la base de datos ");
    } catch (error) {
        console.log(error);
        throw new error("no se ha podido conectar");
    }
}

module.exports = {
    conexion
}