import * as types from '../types'
import shop from '../../api/shop'

const state = {
	cart:[]
}
const getters = {
	cartProducts:state => state.cart
}
const mutations = {
	[types.ADD_ITEM](state){
		const type = shop.activeColor+','+shop.activeStorage
		state.cart.push({
			type:type,
			count:1,
			price:shop.price
		})
	},
	[types.REMOVE_ITEM](state,index){
		state.cart.splice(index,1)
	}
}

const actions = {
	addItem({commit}){
		commit(types.ADD_ITEM)
	},
	removeItem({commit},index){
		commit(types.REMOVE_ITEM,index)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
