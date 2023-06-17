<template>
	<view>
		<view class="home_tab">
			<view class="home_tab_title">
				<view class="title_inner">
					<uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem" styleType="text"
						activeColor="#d4237a"></uni-segmented-control>
				</view>
				<view class="iconfont iconsearch"></view>
			</view>
			<view class="home_tab_content">
					<view v-if="current === 0">
						<home-recommend></home-recommend>
					</view>
					<view v-if="current === 1">
						<home-category></home-category>
					</view>
					<view v-if="current === 2">
						<home-new></home-new>
					</view>
					<view v-if="current === 3">
						<home-album></home-album>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import homeAlbum from './home-album/home-album.vue'
	import homeCategory from './home-category/home-category.vue'
	import homeNew from './home-new/home-new.vue'
	import homeRecommend from './home-recommend/home-recommend.vue'
	import {
		uniSegmentedControl
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				items: [
					{title:"推荐"},
					{title:"分类"},
					{title:"最新"},
					{title:"专辑"}
				],
				current: 0
			};
		},
		components: {
			homeAlbum,
			homeCategory,
			homeNew,
			homeRecommend,
			uniSegmentedControl
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		},
		onLoad() {
			this.request({
				url:"https://www.showdoc.cc/414855720281749?page_id=3678621017219602"
			}).then(res=>{
				console.log(res);
			})
		}
	}
</script>

<style lang="less">
.home_tab{
	.home_tab_title{
		position: relative;
		.title_inner{
			width: 60%;
			margin: 0 auto;
		}
		.iconsearch{
			position: absolute;
			top: 25%;
			transform: translate(-50%);
			right: 5%;
		}
	}
	.home_tab_content{
		
	}
}
</style>
