<template>
	<view v-if="loading" class="content">
		<view class='loader'>
			<view class='loader_overlay'></view>
			<view class='loader_cogs'>
				<view class='loader_cogs__top'>
					<view class='top_part'></view>
					<view class='top_part'></view>
					<view class='top_part'></view>
					<view class='top_hole'></view>
				</view>
				<view class='loader_cogs__left'>
					<view class='left_part'></view>
					<view class='left_part'></view>
					<view class='left_part'></view>
					<view class='left_hole'></view>
				</view>
				<view class='loader_cogs__bottom'>
					<view class='bottom_part'></view>
					<view class='bottom_part'></view>
					<view class='bottom_part'></view>
					<view class='bottom_hole'></view>
				</view>
				<view class="loading_text">loading</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 废弃的loading
	export default {
		props: {
			loading: {
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, .6);
	}

	.loader {
		width: 400rpx;
		height: 400rpx;
		position: relative;
	}

	.loader_overlay {
		width: 150rpx;
		height: 150rpx;
		background: transparent;
		box-shadow: 0rpx 0rpx 0rpx 1000rpx rgba(255, 255, 255, .35), 0rpx 0rpx 19rpx 0rpx rgba(0, 0, 0, 0.16) inset;
		border-radius: 100%;
		z-index: 2;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.loader_cogs {
		z-index: 1;
		width: 100rpx;
		height: 100rpx;
		top: -120rpx !important;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;

		.loading_text {
			margin: 0 auto;
		}
	}

	.loader_cogs__top {
		position: relative;
		width: 100rpx;
		height: 100rpx;
		-webkit-transform-origin: 50rpx 50rpx;
		transform-origin: 50rpx 50rpx;
		-webkit-animation: rotate 10s infinite linear;
		animation: rotate 10s infinite linear;
	}

	.loader_cogs__top view:nth-of-type(1) {
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg);
	}

	.loader_cogs__top view:nth-of-type(2) {
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
	}

	.loader_cogs__top view:nth-of-type(3) {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.loader_cogs__top view.top_part {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		position: absolute;
		background: #f98db9;
	}

	.loader_cogs__top view.top_hole {
		width: 50rpx;
		height: 50rpx;
		border-radius: 100%;
		background: white;
		position: absolute;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.loader_cogs__left {
		position: relative;
		left: -24rpx;
		top: 28rpx;
		width: 80rpx;
		height: 80rpx;
		-webkit-transform: rotate(16deg);
		transform: rotate(16deg);
		-webkit-transform-origin: 40rpx 40rpx;
		transform-origin: 40rpx 40rpx;
		animation: rotate_left 10s .1s infinite reverse linear;
	}

	.loader_cogs__left view:nth-of-type(1) {
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg);
	}

	.loader_cogs__left view:nth-of-type(2) {
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
	}

	.loader_cogs__left view:nth-of-type(3) {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.loader_cogs__left view.left_part {
		width: 80rpx;
		border-radius: 6rpx;
		position: absolute;
		height: 80rpx;
		background: #97ddff;
	}

	.loader_cogs__left view.left_hole {
		width: 40rpx;
		height: 40rpx;
		border-radius: 100%;
		background: white;
		position: absolute;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.loader_cogs__bottom {
		position: relative;
		width: 60rpx;
		top: -65rpx;
		-webkit-transform-origin: 30rpx 30rpx;
		transform-origin: 30rpx 30rpx;
		-webkit-animation: rotate_left 10.2s .4s infinite linear;
		animation: rotate_left 10.2s .4s infinite linear;
		-webkit-transform: rotate(4deg);
		transform: rotate(4deg);
		left: 79rpx;
		height: 60rpx;
	}

	.loader_cogs__bottom view:nth-of-type(1) {
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg);
	}

	.loader_cogs__bottom view:nth-of-type(2) {
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
	}

	.loader_cogs__bottom view:nth-of-type(3) {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.loader_cogs__bottom view.bottom_part {
		width: 60rpx;
		border-radius: 5rpx;
		position: absolute;
		height: 60rpx;
		background: #ffcd66;
	}

	.loader_cogs__bottom view.bottom_hole {
		width: 30rpx;
		height: 30rpx;
		border-radius: 100%;
		background: white;
		position: absolute;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	/* Animations */
	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes rotate_left {
		from {
			-webkit-transform: rotate(16deg);
			transform: rotate(16deg);
		}

		to {
			-webkit-transform: rotate(376deg);
			transform: rotate(376deg);
		}
	}

	@keyframes rotate_left {
		from {
			-webkit-transform: rotate(16deg);
			transform: rotate(16deg);
		}

		to {
			-webkit-transform: rotate(376deg);
			transform: rotate(376deg);
		}
	}
</style>
