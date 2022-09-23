<template>
	<view>
		Goods_list
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
				total:0
			};
		},
		onLoad(options){
			this.queryObj.query = options.query || ''
			this.queryObj.cid = options.cid || ''
			this.getGoodsList()
		}
	}
</script>

<style lang="scss">

</style>
