const router = require('koa-router')()
const controller = require('../controller')

// 创建文章
router.post('/articles', controller.article.create)

// 删除文章
router.del('/articles/:articleId', controller.article.remove)

// 获取文章列表
router.get('/articles', controller.article.list)

module.exports = router