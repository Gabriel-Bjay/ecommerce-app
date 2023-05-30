require('dotenv').config()

const express= require ('express')
const app = express
const fs = require('fs')

app.use(express.json())
app.use(express.static("components"))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

app.listen(3000)    