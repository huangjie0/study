<template>
	<view class="cart">
		<my-address></my-address>
		<!-- 商品列表的标题区域 -->
		<view class="cart-title">
			<!-- 左侧的图标 -->
			<uni-icons type="shop" size="18"></uni-icons>
			<text class="cart-title">
				购物车
			</text>
		</view>
		<uni-swipe-action>
			<block v-for="(goods,i) in cart" :key="i">
				<uni-swipe-action-item :right-options="options" @click="swipeItemClickHandler(goods)">
					<my-goods :item='goods' :showRadio='true' @radio-change='radioChangeHandler' @numberChangeHandler='numberChangeHandler' :showNum='true'></my-goods>
				</uni-swipe-action-item>
			</block>
		</uni-swipe-action>
		<!-- 使用自定义的结算组件 -->
		<my-settle></my-settle>
	</view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	import {mapState,mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState('m_cart',['cart'])
		},
		data() {
			return {
				options:[{
					text:'删除',
					style:{
						backgroundColor:"#C00000"
					}
				}]
			};
		},
		methods:{
			...mapMutations('m_cart',['updateGoodsState','updateGoodsCount','removeGoodsById']),
			radioChangeHandler(e){
				this.updateGoodsState(e)
			},
			numberChangeHandler(e)
			{
				this.updateGoodsCount(e)
			},
			swipeItemClickHandler(goods){
				this.removeGoodsById(goods.goods_id)
			}
		},
		mixins:[badgeMix]
	}
</script>

<style lang="scss">
.cart{
	padding-bottom: 50px;
}
.cart-title{
	height: 40px;
	display: flex;
	align-items: center;
	padding-left: 5px;
	border-bottom: 1px solid #EFEFEF;
	.cart-title{
		font-size: 14px;
		margin-left: 10px;
	}
}
</style>
