<template>
	<view>
		<view class="goods_list">
			<view v-for="(item,index) in goodsList" :key="index" @click="gotoDetail(item)">
				<my-goods :item="item"></my-goods>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//请求参数对象
				queryObj:{
					query:'',
					cid:'',
					pagenum:1,
					pagesize:10
				},
				// 商品列表
				goodsList:[],
				total:0,
				isLoading:false
			};
		},
		onLoad(options){
			this.queryObj.query = options.query || ''
			this.queryObj.cid = options.cid || ''
			this.getGoodsList()
		},
		methods:{
			async getGoodsList(cb){
				// 打开节流阀
				this.isLoading = true
				cb && cb()
				//获取商品列表数据
				const { data:res} = await uni.$http.get('/api/public/v1/goods/search',this.queryObj)
				if(res.meta.status !== 200) return uni.$showMsg()
				//请求成功关闭节流阀
				this.isLoading = false
				this.goodsList = [...this.goodsList,...res.message.goods]
				this.total = res.message.total
			},
			gotoDetail(item){
				uni.navigateTo({
					url:'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
				})
			}
		},
		onReachBottom(){
			if(this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕!')
			if(this.isLoading !== false) return
			this.queryObj.pagenum += 1
			this.getGoodsList()
		},
		onPullDownRefresh(){
			// 重置关键数据
			this.queryObj.pagenum=1
			this.total = 0
			this.isLoading = false
			this.goodsList = []
			this.getGoodsList(()=>{
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
</style>
