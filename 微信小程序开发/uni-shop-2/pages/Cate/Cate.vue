<template>
	<view>
		<!-- 使用组件 -->
		<my-search @click='gotoSearch()'></my-search>
		<view class="scroll-view-container">
			<!-- 左侧的滑动区域 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height:wh + 'px'}">
				<block v-for="(item,index) in cateList" :key="index">
					<view @click="activeChanged(index)" :class="['left-scroll-view-item',index === active ? 'active' : '' ]">{{item.cat_name}}</view>
				</block>
			</scroll-view>
			<!-- 右侧的滑动区域 -->
			<scroll-view scroll-y="true" :style="{height:wh + 'px'}" :scroll-top="scrolltop">
				<view class='cate-lv2' v-for="(item2,i2) in cateLevel2" :key="i2">
					<!-- 二级分类标题 -->
					<view class="cate-lv2-title">
						/ {{item2.cat_name}} /
					</view>
					<!-- 三级列表 -->
					<view class="cate-lv3-list">
						<view @click="gotoGoodslist(item3)" class="cate-lv3-item" v-for="(item3,i3) in item2.children" :key="i3">
							<image :src="item3.cat_icon.replace('dev','web')"></image>
							<text>{{item3.cat_name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//当前设备可用的高度
				wh:0,
				cateList:[],
				//二级分类列表
				cateLevel2:[],
				active:0,
				scrolltop:0
			};
		},
		onLoad(){
			const sysInfo = uni.getSystemInfoSync()
			this.wh = sysInfo.windowHeight - 50
			this.getCateList()
		},
		methods:{
			//获取分类列表数据
			async getCateList(){
				const { data:res } = await uni.$http.get('/api/public/v1/categories')
				if(res.meta.status !== 200) return uni.$showMsg()
				this.cateList = res.message
				//为二级分类赋值
				this.cateLevel2=res.message[0].children
			},
			activeChanged(i){
				this.active = i
				// 重新赋值
				this.cateLevel2 = this.cateList[i].children
				this.scrolltop= this.scrolltop === 0 ? 1 : 0
			},
			gotoGoodslist(item3){
				uni.navigateTo({
					url:'/subpkg/goods_list/goods_list?cid=' + item3.cat_id
				})
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
.scroll-view-container{
	display: flex;
	.left-scroll-view{
		width: 120px;
		.left-scroll-view-item{
			width:#F7F7f7;
			line-height: 60px;
			text-align:center;
			font-size: 12px;
			&.active{
				background-color: #FFFFFF;
				position: relative;
				&::before{
					content: ' ';
					display: flex;
					width: 3px;
					height: 30px;
					background-color: #C00000;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
		}
	}
}
.cate-lv2-title{
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	padding: 15px 0;
}
.cate-lv3-list{
	display: flex;
	flex-wrap: wrap;
	.cate-lv3-item{
		width: 33.33%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		image{
			width: 60px;
			height: 60px;
		}
		text{
			font-size: 12px;
		}
	}
}
</style>
