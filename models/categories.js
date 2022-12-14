const db = require('../db/connection.js')

exports.selectCategories = () => {
    return db.query('SELECT * FROM categories').then((categories) => {
        return categories.rows
    })
}

exports.selectReviews = () => {
    return db.query('SELECT reviews.*, COUNT(comments.comment_id) AS comment_count FROM reviews LEFT JOIN comments ON reviews.review_id = comments.review_id GROUP BY reviews.review_id ORDER BY reviews.created_at DESC;').then((reviews) => { 
        return reviews.rows
    })
}