<template>
	<div class="home">
		<!-- 主体部分 -->
		<right>
			<div slot="content">
				<h1>首页</h1>
				<div class="home-content">
					<div class="orange">
						<h2>796</h2>
						<p>
							<i class="glyphicon glyphicon-user"></i>
							用户总数
						</p>
					</div>
					<div class="green">
						<h2>1160</h2>
						<p>
							<i class="glyphicon glyphicon-th-list"></i>
							商品总数
						</p>
					</div>
					<div class="blue">
						<h2>755</h2>
						<p>
							<i class="glyphicon glyphicon-check"></i>
							订单总数
						</p>
					</div>
				</div>
			</div>
		</right>
	</div>
</template>

<script>
	import Right from '../components/right'
	
	export default{
		components:{
			Right
		}
	}
</script>

<style>
	/* 首页 */
	.home-content{
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
	}
	.home-content>div{
		flex: 1;
		text-align: center;
		color: white;
		margin: 0 15px;
		padding: 20px 0;
	}
	.home-content>div:first-child{
		margin-left: 0px;
	}
	.home-content>div:last-child{
		margin-right: 0px;
	}
	.home-content>.orange{
		background: #F0B45F;
	}
	.home-content>.green{
		background: #6BBE6B;
	}
	.home-content>.blue{
		background: #5DB8D3;
	}
	.home-content>div>h2{
		font-size: 50px;
	}
	.home-content>div>p{
		font-size: 18px;
		margin-top: 20px;
	}
	.home-content>div>p>i{
		position: relative;
		top: 3px;
	}
	.home-content>div:hover{
		color: #333333;
		transition: transform .5s;
		transform: scale(1.1);
	}
</style>
