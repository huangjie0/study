<template>
	<view>
		<view class="search-box">
			<my-search @click='gotoSearch()'></my-search>
		</view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item,index) in swiperlist" :key="index">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 分类导航区域 -->
		<view class="nav-list">
			<view @click="navClickHandler(item)" class="nav-item" v-for="(item,index) in navList" :key="index">
				<image :src="item.image_src" class="nav-img"></image>
			</view>
		</view>
		<!-- 楼层区域 -->
		<view class="floor-list">
			<view class="floor-item" v-for="(item,index) in floorList" :key="index">
				<image :src="item.floor_title.image_src" class="floor-title"></image>
				<!-- 楼层图片区域 -->
				<view class="floor-img-box">
					<!-- 左侧大盒子 -->
					<navigator class="left-img-box" :url="item.product_list[0].url">
						<image mode="widthFix" :src="item.product_list[0].image_src" :style="{width:item.product_list[0].image_width + 'rpx'}"></image>
					</navigator>
					<!-- 右侧盒子 -->
					<view class="right-img-box">
						<navigator :url="item2.url" class="right-img-item" v-for="(item2,index2) in item.product_list" :key="index2" v-if="index2 !== 0">
							<image :src="item2.image_src" :style="{width:item2.image_width + 'rpx'}" mode="widthFix"></image>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		mixins:[badgeMix],
		data() {
			return {
				//轮播图的数据列表
				swiperlist:[],
				navList:[],
				//楼层的数据列表
				floorList:[]
			};
		},
		onLoad() {
			//调用方法获取数据
			this.getSwiperlist()
			//调用分类导航数据
			this.getNavList()
			//调用获取楼层数据
			this.getFloorList()
		},
		methods:{
			navClickHandler(item){
				if(item.name == '分类'){
					uni.switchTab({
						url:'/pages/Cate/Cate'
					})
				}
			},
			async getSwiperlist(){
				const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
				if(res.meta.status !==200) return uni.$showMsg 
				this.swiperlist = res.message
				uni.$showMsg('数据请求成功！')
			},
			async getNavList(){
				 const {data:res} = await uni.$http.get('/api/public/v1/home/catitems')
				 if(res.meta.status !==200) return uni.$showMsg()
				 this.navList = res.message 
			},
			async getFloorList(){
				const { data:res } = await uni.$http.get('/api/public/v1/home/floordata')
				if(res.meta.status !== 200) return uni.$showMsg()
				//数据进行处理
				res.message.forEach(floor => {
					floor.product_list.forEach(prod => {
						prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
					})
				})
				this.floorList = res.message
			},
			gotoSearch(){
				uni.navigateTo({
					url:"/subpkg/search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
swiper{
	height: 330rpx;
	.swiper-item,
	image{
		width: 100%;
		height: 100%;
	}
}
.nav-list{
	display: flex;
	justify-content: space-around;
	margin: 15px 0;
	.nav-img{
		width: 128rpx;
		height: 140rpx;
	}
}
.floor-title{
	width: 100%;
	height: 60rpx;
}
.right-img-box{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.floor-img-box{
	display: flex;
	padding-left: 10rpx;
}
.search-box{
	position: sticky;
	top: 0;
	z-index: 999;
}

</style>
