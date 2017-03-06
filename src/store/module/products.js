import * as types from '../types'
import shop from '../../api/shop'

const state = {
	products: {}
}
const getters = {
	allProducts: state => state.products,
}
const mutations = {
	[types.RECEIVE_PRODUCTS](state){
		state.products = shop
	},
	[types.CHANGE_STYLE](state,productStyle) {
		state.products.activeColor = productStyle.key
		state.products.activeStyleUrl = productStyle.styleUrl
	},
	[types.CHANGE_PRICE](state,productPrice) {
		state.products.activeStorage = productPrice.storage,
		state.products.price = productPrice.price,
		state.products.isSelected = false
	}
}

const actions = {
	getAllProducts({commit}){
		commit(types.RECEIVE_PRODUCTS)
	},
	changeStyle({commit},productStyle) {
		commit(types.CHANGE_STYLE,productStyle)
	},
	changePrice({commit},productPrice) {
		commit(types.CHANGE_PRICE, productPrice)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}