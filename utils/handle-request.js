exports.handleSuccess = (ctx, res) => {
	ctx.body = {
		code: 0,
		data: res,
		message: 'success'
	}
}

exports.handleError = (ctx, err = '请求失败') => {
	ctx.body = {
		code: 1,
		data: null,
		message: err
	}
}