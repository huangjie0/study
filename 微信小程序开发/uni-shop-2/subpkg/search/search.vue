<template>
	<view>
		<view class="search-box">
			<uni-search-bar placeholder="请输入搜索内容" :focus="true" @input="input" :radius="100" cancelButton='none'></uni-search-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer:null
			};
		},
		methods:{
			input(e){
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					console.log(e)
				},500)
			}
		}
	}
</script>

<style lang="scss">
.search-box{
	background-color: #C00000;
	position: sticky;
	top: 0;
	z-index: 999;
}
</style>
