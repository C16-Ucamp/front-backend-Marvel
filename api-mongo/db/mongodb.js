const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qctsqp4.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    console.log('-------------------------------')
    console.log('Base de datos MongoDB conectada')
    console.log('-------------------------------')
})
.catch((err)=>{
    console.error(err)
})

module.exports = mongoose