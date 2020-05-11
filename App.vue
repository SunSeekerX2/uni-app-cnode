<script>
export default {
	onLaunch: function() {
		console.log('App Launch')
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
@import './common/uni.css';
@import './static/iconfont/iconfont.css';
@import './components/gaoyia-parse/parse.css';
page {
	background-color: #e1e1e1;
}
image {
	will-change: transform;
}
</style>
