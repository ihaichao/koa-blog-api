/**
 * 用户数据模型
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  gravatar: { type: String, default: '' }
})

const User = mongoose.model('User', userSchema)

module.exports = User