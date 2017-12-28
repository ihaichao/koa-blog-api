/**
 * 用户数据模型
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  gravatar: { type: String, default: '' }
})

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.comparePassword = async function(candidatePassword, cb) {
  // bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
  //   if (err) return cb(err)
  //   cb(null, isMatch)
  // })
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch (err) {
    throw err
  }
}


const User = mongoose.model('User', UserSchema)

module.exports = User