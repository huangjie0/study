<template>
	<view>
		<view class="search-box">
			<uni-search-bar placeholder="请输入搜索内容" :focus="true" @input="input" :radius="100" cancelButton='none'></uni-search-bar>
		</view>
		<!-- 搜索建议列表 -->
		<view class="sugg-list" v-if="searchResult.length !== 0">
			<view class="sugg-item" v-for="(item,index) in searchResult" :key="index" @click="gotoDetail(item)">
				<view class="goods-name">
					{{item.goods_name}}
				</view>
				<uni-icons type="arrowright" size="16"></uni-icons>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="history-box" v-if="searchResult.length == 0">
			<view class="history-title">
				<text>搜索历史</text>
				<uni-icons type="trash" size="17"></uni-icons>
			</view>
			<view class="history-list">
				<uni-tag :text="item" type="success" v-for="(item,i) in historyList" :key="i">
					
				</uni-tag>
			</view>
			
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
				searchResult:[],
				//搜索记录
				historyList:['a','app','apple']
			};
		},
		methods:{
			gotoDetail(item){
				uni.navigateTo({
					url:"/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
				})
			},
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
.uni-tag{
	margin-top: 5px;
	margin-right: 5px;;
}
.history-box{
	padding: 0 5px;
	.history-title{
		display: flex;
		justify-content: space-between;
		height: 40px;
		align-items: center;
		font-size: 13px;
		border-bottom: 1px solid #efefefef;
	}
	.history-list{
		display: flex;
		flex-wrap: wrap;
	}
}
.search-box{
	background-color: #C00000;
	position: sticky;
	top: 0;
	z-index: 999;
}
.sugg-list{
	padding: 0 5px;
	.sugg-item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		padding: 13px 0;
		border-bottom: 1px solid #efefef;
		.goods-name{
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
}
</style>
