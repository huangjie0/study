<template>
	<view>
		<view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
			<button type="primary" size="mini" class="btnChooseAddress" @click="chooseAddress">请选择收获地址+</button>
		</view>
		<view class="address-info-box" v-else>
			<view class="row1">
				<view class="row1_left">
					<view class="username">
						收货人：{{address.userName}}
					</view>
				</view>
				<view class="row1_right">
					<view class="phone">
						电话：{{address.telNumber}}
					</view>
					<uni-icons type="arrowright" size="16"></uni-icons>
				</view>
			</view>
			<view class="row2">
				<view class="row2_left">
					收获地址：
				</view>
				<view class="row2_right">
					{{newaddress}}
				</view>
			</view>
		</view>
		<image src="../../static/cart_border@2x.png" class="address-border"></image>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		name:"my-address",
		data() {
			return {
				// address:{}
			};
		},
		methods:{
			...mapMutations('m_user',['updateAddress']),
			async chooseAddress(){
				const [err,succ] = await uni.chooseAddress().catch(err => err)
				if(err == null && succ.errMsg == 'chooseAddress:ok'){
					// this.address = succ
					this.updateAddress(succ)
				}
			}
		},
		computed:{
			...mapState('m_user',['address']),
			...mapGetters('m_user',['newaddress'])
		}
	}
</script>

<style lang="scss">
.address-info-box{
	font-size: 12px;
	height: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 5px;
	.row1{
	display: flex;
	justify-content: space-between;
		.row1_left{
			.username{
				
			}
		}
		.row1_right{
			display: flex;
			justify-content: space-between;
			.phone{
				
			}
		}
	}
	.row2{
		display: flex;
		align-items: center;
		margin-top: 10px;
		.row2_left{
			white-space: nowrap;
		}
		.row2_right{
			
		}
	}
}
.address-choose-box{
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.address-border{
	display: block;
	width: 100%;
	height: 5px;
}
</style>