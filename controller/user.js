const User = require('../model/user')
const { handleSuccess, handleError } = require('../utils/handle-request')

/**
 * 登录验证
 */
async function login (ctx) {
  const formData = ctx.request.body
  try {
    const user = await User.findOne({ username: formData.username })
    const isMatch = await user.comparePassword(formData.password)
    if (isMatch) {
      ctx.session.username = formData.username
      handleSuccess(ctx, {
        success: isMatch
      })
    } else {
      handleError(ctx, '登录失败')
    }
  } catch (err) {
    handleError(ctx, '来者何人！')
  }
}

module.exports = {
  login
}