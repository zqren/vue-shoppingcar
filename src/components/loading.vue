<template>
	<div class="loading-box" v-if="loadshow">
		<div class="loading">
			<span >加载中</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:"loading",
		data(){
			return{
				
			}
		},
		props:{
			loadshow:{
				type:Boolean,
				default:true
			}
		}
	}
</script>
<style>
	.loading-box{
		position: fixed;
		top: 40%;
		left: 10%;
		width:80%;
		height: 200px;
		background: #55A532;
		color: #FFFFFF;
		text-align: center;
		z-index: 100;
		line-height: 200px;
	}
</style>
