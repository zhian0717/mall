<template>
	<div class="login">
		<div class="login-warp">
			<p>欢迎登录 - MMALL管理系统</p>
			<input type="text" class="form-control" placeholder="用户名">
			<input type="password" class="form-control" placeholder="密码">
			<button type="button" class="btn btn-primary btn-lg btn-block" @click="getlogin()">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			getlogin() {
				this.$router.push("/home");
			}
		}
	}
</script>

<style>
	/* 登录界面 */
	.login {
		width: 100%;
		height: 100vh;
		background: #F3F3F3;
		overflow: hidden;
		display: flex;
		justify-content: center;
	}

	.login-warp {
		width: 500px;
		background: white;
		padding: 20px;
		margin-top: 150px;
		height: 230px;
	}

	.login-warp p {
		font-size: 18px;
		letter-spacing: 0.2em;
	}

	input[type="password"] {
		margin-top: 20px;
	}

	.login-warp .btn {
		margin-top: 20px;
	}
</style>
