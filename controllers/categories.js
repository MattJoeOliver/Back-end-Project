const { selectCategories, selectReviews } = require('../models/categories')

exports.getCategories = (req, res) => {
    selectCategories().then((categories) => {
        res.status(200).send({categories})
    })
}

exports.getReviews = (req, res) => {
    selectReviews().then((reviews) => {
        res.status(200).send({reviews})
    })
}