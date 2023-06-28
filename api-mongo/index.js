const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express();
const rutas = require('./apis')
require('./db/mongodb')

app.use(cors());
app.use(express.json());
app.use(rutas)


app.get('/', (req,res)=>{
    res.send('Esto vivx')
})

const PORT = 5002
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})