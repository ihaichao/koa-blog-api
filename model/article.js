/**
 * 文章数据模型
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
	title: { type: String, required: true, validate: /\S+/ },
	content: { type: String, required: true, validate: /\S+/ },
	tag: { type: String }, 
	createTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now },
	pageView: { type: Number, default: 0 } 
})

const Article = mongoose.model('Article', artilcleScheme)

module.exports = Article