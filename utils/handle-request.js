exports.handleSuccess = (ctx, res, message = 'success') => {
	ctx.body = {
		code: 0,
		data: res,
		message: message
	}
}

exports.handleError = (ctx, err = '请求失败') => {
	ctx.body = {
		code: 1,
		data: null,
		message: err
	}
}