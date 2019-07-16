/**
 * @name About topic apis
 * @author SunSeekerX
 * @time 2019-07-15 14:55:34
 */

import http from './request'

// 获取主题列表
export const getTopicList = data => {
	return http.request({
		url: '/topics',
		method: 'GET',
		data,
	})
}

// 获取主题详情
export const getTopicDetail = data => {
	return http.request({
		url: `/topic/${data.id}`,
		method: 'GET',
	})
}
