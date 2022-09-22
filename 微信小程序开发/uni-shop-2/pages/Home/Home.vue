<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item,index) in swiperlist" :key="index">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图的数据列表
				swiperlist:[],
				navList:[]
			};
		},
		onLoad() {
			//调用方法获取数据
			this.getSwiperlist()
			//调用分类导航数据
			this.getNavList()
		},
		methods:{
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
</style>
