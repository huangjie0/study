export default {
	namespaced:true,
	state:()=>({
		cart:JSON.parse(uni.getStorageSync('cart') || '[]')
	}),
	mutations:{
		addToCart(state,goods){
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
			if(!findResult){
				state.cart.push(goods)
			}else{
				findResult.goods_count++
			}
			this.commit('m_cart/saveToStorage')
		},
		saveToStorage(state){
			uni.setStorageSync('cart',JSON.stringify(state.cart))
		},
		updateGoodsState(state,goods){
			const findResult = state.cart.find(x => x.goods_id == goods.goods_id)
			if(findResult){
				findResult.goods_state = goods.goods_state
				this.commit('m_cart/saveToStorage')
			}
		},
		updateGoodsCount(state,goods){
			const findResult = state.cart.find(x => x.goods_id == goods.goods_id)
			if(findResult){
				findResult.goods_count = goods.goods_count
			}
			// 对数据进行持久化操作
			this.commit('m_cart/saveToStorage')
		},
		removeGoodsById(state,goods_id){
			state.cart = state.cart.filter(x => x.goods_id !== goods_id)
			this.commit('m_cart/saveToStorage')
		}
	},
	getters:{
		total(state){
			let c = 0
			state.cart.forEach(x => 
				c += x.goods_count
			)
			return c
		},
		checkedCount(state){
			return state.cart.filter(x => x.goods_state).reduce((total,item) =>total+=item.goods_count,0)
		}
	}
}