const express  = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const rutaPersonas = require('./routes/PersonaCineRoutes');

const app = express()
const port = 3000;



app.use(express.json())
app.use('/api', rutaPersonas);


app.get('/', (req, res)=>{
    res.send('Bienvenidos a  mi aplicación!!')
})

//CONEXION A MONGO
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }

    catch (err) {
        console.log(err)
    }
}
mongoConnect()
app.listen(port, () => {
    console.log(`Servidor esta en ejecucion en http://localhost:${port}`)
})