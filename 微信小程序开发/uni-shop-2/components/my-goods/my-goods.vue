<template>
	<view>
		<view class="goods_item">
			<!-- 左边的盒子 -->
			<view class="goods_item_left">
				<radio :checked='item.goods_state' color="#C00000" v-if="showRadio" @click="radioChangeHandler"></radio>
				<image :src="item.goods_small_logo || defaultPic" class="goods_pic"></image>
			</view>
			<view class="goods_item_right">
				<view class="goods_name">
					{{item.goods_name}}
				</view>
				<view class="goods_info_box">
					<view class="goods_price">
						￥{{item.goods_price | tofixed}}
					</view>
					<uni-number-box v-if="showNum" :min="1" :value='item.goods_count' @change="numberChangeHandler"></uni-number-box>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import _default from 'vuex';
	export default {
		name:"my-goods",
		data() {
			return {
				defaultPic:'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
			};
		},
		methods:{
			// 点击事件函数
			radioChangeHandler(){
				this.$emit('radio-change',{
					goods_id:this.item.goods_id,
					goods_state:!this.item.goods_state
				})
			},
			numberChangeHandler(v){
				this.$emit('numberChangeHandler',{
					goods_id:this.item.goods_id,
					goods_count:v-0
				})
			}
		},
		props:{
			item:{
				type:Object,
				default:{}
			},
			showRadio:{
				type:Boolean,
				default:false
			},
			showNum:{
				type:Boolean,
				default:false
			}
		},
		filters:{
			tofixed(num){
				return Number(num).toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
.goods_item{
	display: flex;
	padding: 10px 5px;
	border-bottom: 1px solid #efefef;
	.goods_item_left{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 5px;
		.goods_pic{
			width: 100px;
			height: 100px;
			display: block;
		}
	}
	.goods_item_right{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.goods_name{
			font-size: 13px;
		}
		.goods_info_box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goods_price{
				color: #C00000;
				font-size: 16px;
			}
		}
	}
}
</style>