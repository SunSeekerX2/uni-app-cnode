<template>
	<view @tap="tab()" class="prev">prev</view>
</template>

<script>
	export default {
		methods: {
			tab() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.prev{
		position: fixed;
		left: 50rpx;
		/* #ifdef H5 */
		bottom: 50rpx;
		/* #endif */
		/* #ifndef H5 */
		bottom: calc(var(--window-bottom) + 50rpx);
		/* #endif */
		display: flex;
		justify-content: center;
		align-items: center;
		width: 88rpx;
		height: 88rpx;
		color: #80bd01;
		background-color: #fff;
		box-shadow: 0 20rpx 60rpx 20rpx rgba(0, 0, 0, 0.2);
		font-size: 12px;
		border-radius: 50%;
		z-index: 999;
	}
</style>
