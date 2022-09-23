<template>
	<view @click="searchBoxHandler()" class="my-search-container" :style="{'background-color':bgcolor}">
		<view class="my-search-box" :style="{'border-radius':radius + 'px'}">
			<icon type="search" size="17"/>
			<text class="placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		},
		methods:{
			searchBoxHandler(){
				this.$emit('click')
			}
		},
		props:{
			// 背景颜色
			bgcolor:{
				type:String,
				default:'#C00000'
			},
			// 圆角
			radius:{
				type:Number,
				default:18
			}
		}
	}
</script>

<style lang="scss">
	.my-search-container{
		height: 50px;
		// background-color: #C00000;
		display: flex;
		align-items: center;
		padding: 0 10px;
		.my-search-box{
			height: 36px;
			background-color: #FFFFFF;
			// border-radius: 18px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.placeholder{
				font-size: 15px;
				margin-left: 5px;
			}
		}
	}
</style>