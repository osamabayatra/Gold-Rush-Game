const express = require('express')
const api = require('./server/routes/api')
// const mongoose = require('mongoose')
var cookieParser = require('cookie-parser');

const app = express()
const path = require('path')
app.use(cookieParser());
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/yourDB')
// mongoose.connect('mongodb://`localhost/DBName', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/', api)


const PORT = 3000

app.listen(PORT, function () {
    console.log('server is listening');
})
// app.listen(process.env.PORT || PORT);