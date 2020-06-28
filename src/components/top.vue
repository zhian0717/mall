<template>
	<div class="top">
		<div class="navbar navbar-default top-navbar" role="navigation">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					<b>HAPPY</b><br>MMALL
				</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<i class="glyphicon glyphicon-user"></i>
						<span>欢迎，admin</span>
						<b class="caret"></b>
					</a>
					<ul class="dropdown-menu">
						<router-link to="/login" tag="li">
							<a href="#">退出登录</a>
						</router-link>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	/* 顶部 */
	.navbar-default {
		border: none;
	}
	
	.top-navbar {
		position: fixed;
		z-index: 10;
		top: 0;
		background: #FFFFFF;
		box-shadow: 0 3px 3px rgba(0, 0, 0, .05);
	}
	
	.navbar {
		min-height: 60px;
		margin-bottom: 0;
		width: 100%;
	}
	
	.navbar-default .navbar-brand:focus,
	.navbar-default .navbar-brand:hover {
		background: #32323a;
		color: white;
	}
	
	.top-navbar .navbar-brand,
	.top-navbar .navbar-brand:focus {
		color: #FFFFFF;
		width: 260px;
		text-align: left;
		font-size: 30px;
		font-weight: 700;
		line-height: 30px;
		background: #32323a;
		height: 60px;
	}
	
	.navbar-brand b {
		color: #2dafcb;
	}
	
	.nav>li>a {
		padding: 20px 30px;
	}
</style>
