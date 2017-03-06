import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes
})
router.beforeEach(function(to, from, next) {
	var userMsg = localStorage.getItem('userMsg')
	if(to.path === '/Personal') {
		if(!userMsg) {
			next({
				path: '/Login'
			})
		}
	}
	next()
})
export default router