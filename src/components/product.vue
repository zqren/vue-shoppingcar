<template>
	<div class="container">
		<div class="row">
			<div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
				<div class="row">
					<div class="gallery col-md-6 col-sm-6">
						<img v-if="allProducts.activeColor" :src="allProducts.activeStyleUrl" class="img-responsive" />
						<img v-else :src="iPhone6S.styleUrl" class="img-responsive" />
					</div>
					<div class="detail col-md-6 col-sm-6">
						<h3 class="name">
							<span>{{iPhone6S.name}}</span>
						</h3>
						<hr />
						<div class="options">
							<dl class="dl-horizontal">
								<dt>描述：</dt>
								<dd>
									<span v-text="iPhone6S.desc"></span>
								</dd>
							</dl>
							<dl class="price dl-horizontal">
								<dt>价格:</dt>
								<dd class="pomegranage">
									<strong>
										￥
										<span v-if="allProducts.price">{{allProducts.price}}</span>
										<span v-else>{{iPhone6S.price}}</span>
									</strong>
								</dd>
							</dl>
							<dl class="option dl-horizontal">
								<dt>外观</dt>
								<dd>
									<ul>
										<li v-for="(styleUrl,key) in allProducts.style" 
											@click="changeStyle({key,styleUrl})" 
											:class="{active:allProducts.activeStyleUrl == styleUrl}">
											<span>{{key}}</span>
										</li>
									</ul>
								</dd>
							</dl>
							<dl class="option dl-horizontal">
								<dt>存储容量：</dt>
								<dd>
									<ul>
										<li v-for="(price,storage) in allProducts.storage" 
											@click="changePrice({storage,price})" 
											:class="{active:allProducts.price == price}">
											<span>{{storage}}</span>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
						<hr />
						<button class="btn btn-danger btn-block" 
							:disabled="allProducts.isSelected"
							@click="addItem">
							<span class="glyphicon glyphicon-shopping-cart">加入购物车</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
    import {mapGetters,mapActions} from 'vuex'
	export default {
		name: 'home',
		data() {
			return {
				iPhone6S: {
					name: 'Apple/苹果 iPhone 6S',
					desc: '3D Touch/1200万像素',
					price: '5288-6888',
					styleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
				}
			}
		},
		computed:{
			...mapGetters(['allProducts'])
		},
		methods: {
			...mapActions(['changeStyle','changePrice','addItem'])
		},
		created(){
			this.$store.dispatch('getAllProducts')
		}
	}
</script>
<style type="text/css">
	.pomegranage {
		color: #c0392b;
	}
	
	.detail dt {
		color: #95a5a6;
		width: 64px;
		padding: 4px 0;
	}
	
	.detail dd {
		margin-left: 64px;
		padding: 4px;
	}
	
	.option ul {
		padding: 0;
	}
	
	.option ul> li {
		float: left;
		list-style: none;
		margin-right: 4px;
		padding: 0 8px;
		border: 2px solid #eee;
	}
	
	.option ul> li:hover {
		border: 2px solid #c0392b;
	}
	
	.option ul .active {
		border: 2px solid #c0392b;
	}
</style>