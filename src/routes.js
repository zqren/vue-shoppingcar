//import Cart from './components/cart'
//import Product from './components/product'
//import Login from './components/login'

const routes = [{
	path: '/',
	//	component: Product
	component: require('./components/product')
}, {
	path: '/Product',
	name: 'Product',
	//	component: Product
	component: require('./components/product')
}, {
	path: '/Cart',
	name: 'Cart',
	//	component: Cart
	component: require('./components/cart')
}, {
	path: '/Login',
	name: 'Login',
	//	component: Login
	component: require('./components/login')
},{
	path: '/Personal',
	name: 'Personal',
	//	component: Login
	component: require('./components/perInfo')
}]

export default routes
