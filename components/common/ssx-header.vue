<template>
	<view>
		<!-- #ifndef H5 -->
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<!-- 头部 -->
		<view class="header">
			<!-- logo -->
			<image class="cnode-logo" src="../../static/images/cnodejs_light.svg"></image>
			<!-- 搜索 -->
			<view class="header-search">
				<view class="search-icon iconfont icon-search"></view>
				<view class="search-input"><input type="text" /></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	/* #ifndef H5 */
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;  
		background-color: #444;  
	}  
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: #444;  
		top: 0;  
		z-index: 999;  
	}
	/* #endif */
	// 头部logo
	.header {
		padding: 25rpx 0;
		/* #ifdef H5 */
		width: 730rpx;
		margin: 0 10rpx 50rpx;
		/* #endif */
		/* #ifndef H5 */
		width: 750rpx;
		margin-bottom: 50rpx;
		/* #endif */
		background-color: #444;
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	
		// logo
		.cnode-logo {
			width: 240rpx;
			height: 68rpx;
			padding-bottom: 25rpx;
		}
	
		// 搜索
		.header-search {
			width: 480rpx;
			padding: 0 20rpx;
			height: 66rpx;
			background-color: #888;
			display: flex;
			border-radius: 50rpx;
			align-items: center;
			transition: .3s;
	
			.search-icon {
				width: 50rpx;
				color: #444;
				font-weight: 600;
			}
	
			.search-input {
				width: 430rpx;
	
				input {
					width: 410rpx;
					height: 66rpx;
					line-height: 66rpx;
					color: #666;
					font-size: 24rpx;
				}
			}
		}
	
		.header-search:hover {
			background-color: #fff;
		}
	}
</style>
