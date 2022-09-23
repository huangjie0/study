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
				timer:null,
				kv:'',
				// 搜索结果
				searchResult:[]
			};
		},
		methods:{
			input(e){
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.kv = e
					this.getSearchList()
				},500)
			},
			async getSearchList(){
				if(this.kv.length == 0){
					this.searchResult = []
					return
				}
				 const { data: res} = await uni.$http.get('/api/public/v1/goods/qsearch',{query:this.kv})
				 if(res.meta.status !== 200) return uni.$showMsg()
				 this.searchResult = res.message
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
