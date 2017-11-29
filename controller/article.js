const Article = require('../model/article')
const { handleSuccess, handleError } = require('../utils/handle-request')

// 创建文章
async function create (ctx) {
	const article = ctx.request.body
	try {
		const res = await new Article(article).save()
		handleSuccess(ctx)
	} catch (err) {
		handleError(ctx, err)
	}
}

// 删除文章
async function remove (ctx) {
	const articleId = ctx.params.articleId
	try {
		await Article.findByIdAndRemove(articleId)
		handleSuccess(ctx)
	} catch (err) {
		handleError(ctx, err)
	}
}

// 获取文章列表
async function list (ctx) {
	try {
		const list = await Article.find()
		handleSuccess(ctx, list)
	} catch (err) {
		handleError(ctx, err)
	}
}

module.exports = {
	create,
	remove,
	list
}