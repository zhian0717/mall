<template>
	<div class="left">
		<div>
			<slot name="leftcontent" searchtext="订单号"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props: ["mark", "sel"],
		computed: {
			"bol": function() {
				if (this.mark == this.sel) {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			leftsend() {
				this.$emit("ls", this.mark)
			}
		}
	}
</script>

<style>
	/* 左边导航 */
	.left-nav {
		margin-top: 60px;
		width: 260px;
		float: left;
		/* height: 660px; */
		height: calc(100vh - 60px);
		background: #2B2E33;
		margin-bottom: 0px;
		position: fixed;
		left: 0;
		z-index: 3;
	}
	
	.left-nav li {
		width: 260px;
	}
	
	.left-nav li a {
		display: block;
		color: #b5b5b5;
		background: #2B2E33;
		box-sizing: border-box;
		padding: 18px 15px;
		font-size: 14px;
	}
	
	.left-nav li i {
		display: inline-block;
		margin-right: 10px;
	}
	
	.left-nav>li:first-child {
		border-bottom: 1px solid #37393D;
	}
	
	.left-nav li b {
		float: right;
		margin-top: 8px;
	}
	
	.child-nav {
		width: 260px;
	}
	
	.child-nav li a {
		background: #17191B;
		display: block;
		box-sizing: border-box;
		color: #b5b5b5;
		padding: 12px 35px;
	}
	
	.child-nav li:first-child {
		border-bottom: none;
	}
	
	.color li a{
		background: #2DAFCB;
		color: white;
	}
</style>
