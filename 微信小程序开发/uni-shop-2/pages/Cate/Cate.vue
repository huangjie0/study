<template>
	<view>
		<view class="scroll-view-container">
			<!-- 左侧的滑动区域 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height:wh + 'px'}">
				<view class='left-scroll-view-item active'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
				<view class='left-scroll-view-item'>xxx</view>
			</scroll-view>
			<!-- 右侧的滑动区域 -->
			<scroll-view scroll-y="true" :style="{height:wh + 'px'}">
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
				<view class='right-scroll-view-item'>xxx</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//当前设备可用的高度
				wh:0
			};
		},
		onLoad(){
			const sysInfo = uni.getSystemInfoSync()
			console.log((sysInfo))
			this.wh = sysInfo.windowHeight
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
</style>
