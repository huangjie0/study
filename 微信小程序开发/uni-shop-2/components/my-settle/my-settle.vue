<template>
	<view class="my-settle-container">
		<!-- 全选 -->
		<label class="radio">
			<radio color="#C00000" checked="true"/><text>全选</text>
		</label>
		<!-- 合计 -->
		<view class="amount-box">
			合计：<text class="amount">￥123.00</text>
		</view>
		<!-- 结算 -->
		<view class="btn-settle">
			结算（{{checkedCount}}）
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name:"my-settle",
		data() {
			return {
				
			};
		},
		computed:{
			...mapGetters('m_cart',['checkedCount'])
		}
	}
</script>

<style lang="scss">
.my-settle-container{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 5px;
	font-size: 14px;
	padding-left: 5px;
	background-color: white;
	.radio{
		display: flex;
		align-items: center;
	}
	.amount-box{
		.amount{
			color: #C00000;
			font-weight: bold;
		}
	}
	.btn-settle{
		background-color: #C00000;
		height: 50px;
		color: white;
		line-height: 50px;
		text-align: center;
		padding: 0 10px;
		min-width: 100px;
	}
}
</style>