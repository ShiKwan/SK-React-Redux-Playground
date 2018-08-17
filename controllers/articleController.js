const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    findAll : function (req, res) {
        db.Article
            .find({})
            .then( articles => res.json(articles))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    findById : function (req, res) {
        db.Article
            .find({ _id : req.params.id})
            .then( article => res.json(article))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    add : function ( req, res ) {
        db.Article.collection
            .insert(req.body)
            .then(article => res.json(article))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    remove : function ( req, res) {
        db.Article
            .findById({ _id : req.params.id })
            .then(article => article.remove())
            .then(article => res.json(article))
            .catch( err => {
                console.log(err);
                res.status(422).json(err);
            })
    }
}