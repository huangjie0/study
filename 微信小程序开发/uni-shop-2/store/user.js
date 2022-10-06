export default {
	//开启命名空间
	namespaced:true,
	state:()=>({
		address:JSON.parse(uni.getStorageSync('address') || '{}') 
	}),
	//方法
	mutations:{
		//更新收获地址
		updateAddress(state,address){
			state.address = address
			this.commit('m_user/saveAddressToStorage')
		},
		//本地存储
		saveAddressToStorage(state){
			uni.setStorageSync('address',JSON.stringify(state.address))
		}
	},
	getters:{
		//最新的收货地址
		newaddress(state){
			if(JSON.stringify(state.address)=='{}') return ''
			return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
		}
	}
	
}