const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    date_created : {type: Date, default: Date.now},
    title : {type: String, required : true},
    category : {type: String, required : true},
    content : {type : String, required : true},
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;