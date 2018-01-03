const router = require('koa-router')()
const controller = require('../controller')

// 登录
router.post('/user/login', controller.user.login)

// 是否登录
router.get('/user/islogin', controller.user.isLogin)

module.exports = router
