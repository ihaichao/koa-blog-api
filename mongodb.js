const mongoose = require('mongoose')
const config = require('./config')
mongoose.Promise = global.Promise

exports.connect = () => {
	// 连接数据库
	mongoose.connect(config.MONGODB.uri)

	// 连接成功
	mongoose.connection.on('connected', () => {
		console.log('数据库连接成功: ' + config.MONGODB.uri)
	})

	// 连接失败
	mongoose.connection.on('error', err => {
		console.log('数据库连接失败: ', err)
	})

	// 连接断开
	mongoose.connection.on('disconnected', () => {
		console.log('数据库连接断开')
	})

	return mongoose
}

