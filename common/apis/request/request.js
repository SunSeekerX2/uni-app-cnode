/** 
 * @name uni-app请求封装
 * @author SunSeekerX
 * @Date: 2019-07-12 21:41:47
 */

export default {
	config: {
		baseURL: 'http://127.0.0.1',
		dataType: 'json',
		responseType: 'text',
		header: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		method: 'GET',
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseURL = options.baseURL || this.config.baseURL
		options.dataType = options.dataType || this.config.dataType
		options.responseType = options.responseType || this.config.responseType
		options.header = Object.assign({}, this.config.header, options.header) // 请求的头部会覆盖请求之前的设置
		options.url = options.baseURL + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method

		return new Promise((resolve, reject) => {
			options.complete = response => {
				try {
					if (this.interceptor.response) {
						let newResponse = this.interceptor.response(response)
						newResponse ? response = newResponse : null
					}
					// 成功
					response.statusCode === 200 ? resolve(response) : reject(response)
				} catch (e) {
					reject(e)
				}
			}

			// 在请求之前执行请求拦截器
			if (this.interceptor.request) {
				this.interceptor.request(options)
			}

			uni.request(options)
		})
	}
}
