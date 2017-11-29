const router = require('koa-router')()
const controller = require('../controller')

// 创建文章
router.post('/article', controller.article.create)

// 删除文章
router.del('/article/:articleId', controller.article.remove)

// 获取文章列表
router.get('/article', controller.article.list)

module.exports = router