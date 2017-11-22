const router = require('koa-router')()
const controller = require('../controller')

// 创建文章
router.post('/article', controller.article.create)

module.exports = router