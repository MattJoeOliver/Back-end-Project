const express = require('express')

const { getCategories } = require('./controllers/categories.js')

const app = express()

app.get('/api/categories', getCategories)

module.exports = app