const express = require('express');
const routes = express.Router();
const personasCineSchema = require('../models/personas')

//traer todas las personas
routes.get('/persona', (req, res)=>{
    personasCineSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
})

//Traer una persona
routes.get('/persona/:id', (req, res)=>{
    const {id} = req.params;
    personasCineSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
})

//insertar una persona
routes.post('/persona', (req, res)=>{
    const persona = personasCineSchema(req.body);
    persona
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
})

//Actualizar
routes.put('/persona/:id', (req, res)=>{
    const {id} = req.params;
    const {nombres, apellidos, fecha_de_nacimiento, rol, telefono, correo, contraseña, nombre_de_usuario, cliente} = req.body;
    personasCineSchema
    .updateOne({_id:id}, {$set:{nombres, apellidos, fecha_de_nacimiento, rol, telefono, correo, contraseña, nombre_de_usuario, cliente}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
})

//Borrar
routes.delete('/persona/:id', (req, res)=>{
    const {id} = req.params;
    personasCineSchema
    .findByIdAndDelete({ _id: id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = routes;