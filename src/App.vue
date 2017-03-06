<template>
	<div id="app">
		<loading :loadshow="show"></loading>
		<nav-header></nav-header>
		<router-view></router-view>
	</div>
</template>
<script>
	import NavHeader from './components/NavHeader'
	import loading from './components/loading'

	export default {
		name: 'app',
		data() {
			return {
				show: true
			}
		},
		created() {
			this.show = true
		},
		mounted() {
			this.$nextTick(function(){
				this.show = false
			})
		},
		components: {
			NavHeader,
			loading
		}
	}
</script>
