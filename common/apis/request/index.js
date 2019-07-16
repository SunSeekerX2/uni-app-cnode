/**
 * @name Global request config
 * @author SunSeekerX
 * @time 2019-07-15 14:55:34
 */

import request from './request'
import util from '@/common/ssx_util'

// BaseURL
request.config.baseURL = 'https://cnodejs.org/api/v1'

// 请求拦截器
request.interceptor.request = config => {
	// loading
	util.loading()
}

// 响应拦截器
request.interceptor.response = response => {
	// hideLoading
	util.hideLoading()
	return response
}

export default request
