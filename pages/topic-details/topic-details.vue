<template>
	<view>
		<!-- 头部 -->
		<ssx-header></ssx-header>

		<!-- 话题详情 -->
		<view class="topic-detail">
			<!-- 话题详情 -->
			<view v-if="topic.id">
				<!-- 话题头部 -->
				<view class="detail-header">
					<view class="topic-title">{{ topic.title }}</view>
					<view class="topic-header-info">•发布于{{ topic.create_at }}•作者 {{ topic.author.loginname }}•{{ topic.visit_count }} 次浏览•来自 {{ topic.tab }}</view>
				</view>
				<!-- 话题内容 -->
				<view class="detail-content"><u-parse :content="topic.content" @preview="preview" @navigate="navigate" /></view>
				<!-- 话题回复 -->
				<view class="detail-reply">
					<!-- 回复标题 -->
					<view class="reply-title">{{ topic.reply_count }}回复</view>
					<!-- 回复列表 -->
					<view class="reply-list">
						<block v-for="(reply, replyIndex) of topic.replies" :key="reply.id">
							<view class="reply">
								<view class="reply-header">
									<view class="reply-author-avatar">
										<image :src="reply.author.avatar_url"></image>
									</view>
									<view class="reply-info">
										<text class="reply-author">{{ reply.author.loginname}}</text>
										<text class="reply-time">{{ replyIndex + 1 }}楼•{{ reply.create_at }}</text>
									</view>
								</view>
								<view class="reply-content">
									<u-parse :content="reply.content" @preview="preview" @navigate="navigate" />
								</view>
							</view>
						</block>
					</view>
				</view>
			</view>
			
			<!-- No data -->
			<ssx-no-data v-if="!topic.id"></ssx-no-data>
		</view>
		
		<!-- 返回按钮 -->
		<ssx-fix-button></ssx-fix-button>
		
		
	</view>
</template>

<script>
const moment = require('moment')
import uParse from '@/components/gaoyia-parse/parse'
import SsxHeader from '@/components/common/ssx-header'
import SsxNoData from '@/components/common/ssx-no-data'
import SsxFixButton from '@/components/common/ssx-fix-button'
import { Topic } from '@/common/apis'
export default {
	components: {
		uParse,
		SsxHeader,
		SsxNoData,
		SsxFixButton,
	},
	data() {
		return {
			// 加载层
			loading: false,
			// 话题ID
			topicId: '',
			topic: {
				id: '',
				author_id: '',
				tab: '',
				content: '',
				title: '',
				last_reply_at: '',
				good: false,
				top: false,
				reply_count: 0,
				visit_count: 0,
				create_at: '',
				author: {
					loginname: '',
					avatar_url: ''
				},
				replies: [
					// {
					// 	id: '5b7acae5a210553a0cde2aa3',
					// 	author: {
					// 		loginname: 'caililin',
					// 		avatar_url: 'https://avatars1.githubusercontent.com/u/42212525?v=4&s=120'
					// 	},
					// 	content: '<div class="markdown-text"><p>阿里在用算吗?</p>\n</div>',
					// 	ups: [],
					// 	create_at: '2018-08-20T14:06:29.761Z',
					// 	reply_id: null,
					// 	is_uped: false
					// },
					// {
					// 	id: '5b7acbd5a210553a0cde2aa5',
					// 	author: {
					// 		loginname: 'zdingfeng',
					// 		avatar_url: 'https://avatars2.githubusercontent.com/u/41906659?v=4&s=120'
					// 	},
					// 	content: '<div class="markdown-text"><p>不了解egg  刚学会koa，哪里有egg的视频教程推荐一下  老铁们</p>\n</div>',
					// 	ups: ['5a4c37419ea8f8bc490e6436'],
					// 	create_at: '2018-08-20T14:10:29.375Z',
					// 	reply_id: null,
					// 	is_uped: false
					// },
					// {
					// 	id: '5b7acd02632c7f422e5b8009',
					// 	author: {
					// 		loginname: 'songsunli',
					// 		avatar_url: 'https://avatars1.githubusercontent.com/u/41601667?v=4&s=120'
					// 	},
					// 	content:
					// 		'<div class="markdown-text"><p><a href="/user/zdingfeng">@zdingfeng</a></p>\n<p><strong>Eggjs 视频教程百度网盘分享</strong>： <a href="https://pan.baidu.com/s/1t6XHpny8-H8mApLkzcsS8w">https://pan.baidu.com/s/1t6XHpny8-H8mApLkzcsS8w</a></p>\n<p><strong>或者此链接Egg.js视频教程链接</strong>： <a href="https://pan.baidu.com/s/1-jdCXKGgfk9yI8xJOOhPhg">https://pan.baidu.com/s/1-jdCXKGgfk9yI8xJOOhPhg</a>  <strong>密码</strong>：4b6i</p>\n<p>拿走不谢</p>\n<p>csdn找的</p>\n</div>',
					// 	ups: ['5c2c0a763898674067a7a08e'],
					// 	create_at: '2018-08-20T14:15:30.652Z',
					// 	reply_id: '5b7acbd5a210553a0cde2aa5',
					// 	is_uped: false
					// }
				],
				is_collect: false
			}
		}
	},
	methods: {
		preview(src, e) {
			// do something
		},
		navigate(href, e) {
			// do something
		},
		// 获取话题详情
		async handleGetTopicDetail(id) {
			try {
				const res = await Topic.getTopicDetail({ id })
				if (res.data.success) {
					this.topic = this.handleTopicDetailFilter(res.data.data)
				} else {
					this.$util.toast('request api error')
				}
			} catch (e) {
				this.$util.requestError()
			} finally {
				// Stop pull down refresh
				uni.stopPullDownRefresh()
			}
		},
		// 话题详情数据过滤
		handleTopicDetailFilter(topic) {
			// 过滤话题数据
			switch (topic.tab) {
				case 'share':
					topic.tab = '分享'
					break;
				case 'ask':
					topic.tab = '问答'
					break;
				case 'job':
					topic.tab = '招聘'
					break;
				case 'good':
					topic.tab = '精华'
					break;
				default:
					break;
			}
			topic.create_at = moment(topic.create_at).format('YYYY-MM-DD HH:mm:ss')
			return topic
		},
	},
	onLoad(options) {
		if (options.id) {
			this.topicId = options.id
			this.handleGetTopicDetail(this.topicId)
		}
	}
}
</script>

<style lang="scss">
// 话题详情
.topic-detail {
	width: 730rpx;
	margin: 0 15rpx 25rpx;
	background-color: #fff;
	border-radius: 6rpx;
	// 话题头部
	.detail-header {
		width: 690rpx;
		padding: 20rpx;
		border-bottom: #e5e5e5 solid 2rpx;
		.topic-title {
			color: #333;
			font-size: 22px;
			font-weight: 700;
		}
		.topic-header-info {
			font-size: 12px;
			color: #838383;
		}
	}
	// 话题内容
	.detail-content {
		width: 690rpx;
		padding: 20rpx;
	}
	// 话题回复
	.detail-reply {
		width: 730rpx;
		// 回复标题
		.reply-title {
			width: 690rpx;
			padding: 20rpx;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 14px;
			color: #333;
			background-color: #f6f6f6;
		}
		// 回复列表
		.reply-list {
			width: 690rpx;
			padding: 20rpx;
			.reply {
				padding: 25rpx 0 0;
				border-bottom: #f0f0f0 solid 2rpx;
				.reply-header {
					height: 88rpx;
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-start;
					align-items: center;
					.reply-author-avatar {
						margin-right: 15rpx;
						image {
							width: 60rpx;
							height: 60rpx;
						}
					}
					.reply-info {
						.reply-author {
							margin-right: 15rpx;
							color: #666;
							font-size: 12px;
							font-weight: 700;
						}
						.reply-time {
							font-size: 11px;
							color: #08c;
						}
					}
				}
				.reply-content {
				}
			}
		}
	}
}
</style>
