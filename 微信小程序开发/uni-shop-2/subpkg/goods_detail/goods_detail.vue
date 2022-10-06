<template>
	<view v-if="goods_info.goods_name" class="goods-detail-container">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item,i) in goods_info.pics" :key="i">
				<image :src="item.pics_big" @click="preview(i)"></image>
			</swiper-item>
		</swiper>
		<!-- 商品信息区 -->
		<view class="goods_info_box">
			<!-- 商品价格 -->
			<view class="price">
				￥{{goods_info.goods_price}}
			</view>
			<!-- 商品信息主体 -->
			<view class="goods-info-body">
				<!-- 商品名字 -->
				<view class="goods_name">
					{{goods_info.goods_name}}
				</view>
				<!-- 收藏区域 -->
				<view class="favi">
					<text>收藏</text>
					<uni-icons type='star' size="18" color="gray"></uni-icons>
				</view>
			</view>
			<view class="yf">
				快递：免运费
			</view>
		</view>
		<rich-text :nodes="goods_info.goods_introduce">
		</rich-text>
		<!-- 商品导航组件 -->
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
 	export default {
		data() {
			return {
				goods_info:{
					
				},
				options: [ {
							icon: 'shop',
							text: '店铺',
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 0
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#ff0000',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#ffa200',
					      color: '#fff'
					    }
					    ]
			};
		},
		computed:{
			...mapState('m_cart',['cart']),
			...mapGetters('m_cart',['total'])
		},
		watch:{
			total:{
				handler(newvalue){
					const findResult =  this.options.find(x => x.text == '购物车')
					if(findResult){
						findResult.info = newvalue
					}
				},
				immediate:true
			}
		},
		onLoad(options){
			 this.getGoodsDetail(options.goods_id)
		},
		methods:{
			...mapMutations('m_cart',['addToCart']),
			async getGoodsDetail(id){
				const {data:res}= await uni.$http.get('/api/public/v1/goods/detail',{goods_id:id})
				if(res.meta.status !== 200 ) return uni.$showMsg()
				res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g,'<img style="display:block;"').replace(/webp/g,'jpg')
				this.goods_info = res.message
			},
			preview(i){
				// 放大图片
				uni.previewImage({
					current:i,
					urls:this.goods_info.pics.map(x => x.pics_big)
				})
			},
			 onClick (e) {
				 if(e.content.text == '购物车'){
					 uni.switchTab({
					 	url:'/pages/Cart/Cart'
					 })
				 }
				  },
			buttonClick (e) {
				if(e.content.text == '加入购物车'){
					const goods = {
						goods_id:this.goods_info.goods_id,
						goods_name:this.goods_info.goods_name,
						goods_price:this.goods_info.goods_price,
						goods_count:1,
						goods_logo:this.goods_info.goods_logo,
						goods_state:true
					}
					this.addToCart(goods)	
				}
			  }
	
		}
	}
</script>

<style lang="scss">
.goods-detail-container{
	padding-bottom: 50px;
}
.goods_nav{
	position: fixed;
	bottom:0;
	left: 0;
	width: 100%;
}
swiper{
	height: 750rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
.goods_info_box{
	padding: 10px;
	padding-right: 0;
	.price{
		color: #C00000;
		font-size: 18px;
		margin: 10px 0;
	}
	.goods-info-body{
		display: flex;
		justify-content: space-between;
		.goods_name{
			font-size: 13px;
			margin-right: 10px;
		}
		.favi{
			width: 120px;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-left: 1px solid #efefef;
			color: gray;
		}
	}
	.yf{
		color: gray;
		font-size: 12px;
		margin: 10px 0;
	}
}
</style>
