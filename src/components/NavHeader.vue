<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand">首页</router-link>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link to="/Product" tag="li">
						<a >iPhone 6S
							<span class="sr-only">(current)</span>
						</a>
					</router-link>
					<router-link to="/Cart" tag="li">
						<a>
							购物车
							<span class="badge text-danger" v-if="totalItem">{{totalItem}}</span>
						</a>
					</router-link>
					<router-link to="/Personal" tag="li">
						<a >个人中心</a>
					</router-link>
				</ul>
			</div>
		</div>
		
	</nav>
</template>
<style media="screen">
	.text-danger {
		color: #fff;
		background-color: #d9534f;
	}
</style>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		name: 'NavHeader',
		computed: {
			'totalItem': function() {
				return this.cartProducts.length
			},
			...mapGetters(['cartProducts'])
		}
	}
</script>