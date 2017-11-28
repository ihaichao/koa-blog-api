const Article = require('../model/article')

// 创建文章
async function create (ctx) {
	const article = ctx.request.body
	try {
		const res = await new Article(article).save()
		console.log('文章创建成功: ', res)
	} catch (err) {
		console.log('文章创建失败: ', err)
	}
}

// 删除文章
async function remove (ctx) {
	const articleId = ctx.params.articleId
	try {
		await Article.findByIdAndRemove(articleId)
		console.log('文章删除成功: ')
	} catch (err) {
		console.log('文章删除失败: ', err)
	}
}

module.exports = {
	create,
	remove
}