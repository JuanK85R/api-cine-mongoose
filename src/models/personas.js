const mongoose = require('mongoose')

// DEFINIR LA ESTRUCTURA DEL DOCUMENTO QUE SE VA A CREAR
const personasCineSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    }, 
    apellidos: {
        type: String,
        required: true
    },
    fecha_de_nacimiento: {
        type: Date,  
    },
    rol: {
        type: String
    },
    telefono: {
        type: String,
    },
    correo: {
        type: String,
    },
    contraseña: {
        type: String,
    },
    nombre_de_usuario: {
        type: String,   
        required: true
    },
    cliente: {
        type: Number,
    },
})


module.exports = mongoose.model("personasCine", personasCineSchema)