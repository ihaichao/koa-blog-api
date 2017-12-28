/**
 * 文章数据模型
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
	title: { type: String, required: true, validate: /\S+/ },
	tag: { type: String }, 
	content: { type: String, required: true, validate: /\S+/ },
	createTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: null },
	pageView: { type: Number, default: 0 } 
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article