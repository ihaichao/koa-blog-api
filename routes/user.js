const router = require('koa-router')()
const controller = require('../controller')

// 登录
router.post('/login', controller.user.login)

module.exports = router
