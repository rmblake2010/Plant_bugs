
// Depedencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

//Config / Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Setting up sequelize connection
const sequelize = new Sequelize('postgresql://bungalow:Jailbird2@localhost:5000/plant_bug')

const connect = async () => {
    try{
        await sequelize.authenticate()
        console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
    } catch(err) {
        console.log(`Unable to connect to PG ${err}`)
    }
}
connect()


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})