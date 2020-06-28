<template>
	<div class="index">
		<top></top>
		<ul class="left-nav">
			<router-link to="/home" tag="li" active-class="color">
				<left mark="home">
					<li slot="leftcontent">
						<a href="#">
							<i class="glyphicon glyphicon-signal"></i>
							首页
						</a>
					</li>
				</left>
			</router-link>
			<router-link to="/commodity/index" tag="li">
				<left mark="commoditybig">
					<li slot="leftcontent">
						<a href="#">
							<i class="glyphicon glyphicon-th-list"></i>
							商品
							<b class="caret"></b>
						</a>
					</li>
				</left>
			</router-link>
			<router-link to="/commodity/index" tag="li" active-class="color">
				<left mark="commodity">
					<li slot="leftcontent">
						<ul class="child-nav">
							<li>
								<a href="#">商品管理</a>
							</li>
						</ul>
					</li>
				</left>
			</router-link>
			<router-link to="/category/index" tag="li" active-class="color">
				<left mark="category">
					<li slot="leftcontent">
						<ul class="child-nav">
							<li>
								<a href="#">品类管理</a>
							</li>
						</ul>
					</li>
				</left>
			</router-link>
			<router-link to="/order/index" tag="li">
				<left mark="orderbig">
					<li slot="leftcontent">
						<a href="#">
							<i class="glyphicon glyphicon-check"></i>
							订单
							<b class="caret"></b>
						</a>
					</li>
				</left>
			</router-link>
			<router-link to="/order/index" tag="li" active-class="color">
				<left mark="order">
					<li slot="leftcontent">
						<ul class="child-nav">
							<li>
								<a href="#">订单管理</a>
							</li>
						</ul>
					</li>
				</left>
			</router-link>
			<router-link to="/user/index" tag="li">
				<left mark="userbig">
					<li slot="leftcontent">
						<a href="#">
							<i class="glyphicon glyphicon-user"></i>
							用户
						</a>
					</li>
				</left>
			</router-link>
			<router-link to="/user/index" tag="li" active-class="color">
				<left mark="user">
					<li slot="leftcontent">
						<ul class="child-nav">
							<li>
								<a href="#">用户列表</a>
							</li>
						</ul>
					</li>
				</left>
			</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import Top from '../components/top'
	import Home from './home'
	import Left from '../components/left'
	import Commodity from './commodity'
	import Category from './category'
	import Order from './order'
	import User from './user'
	
	export default{
		components:{Home,Left,Top,Commodity,Category,Order,User},
		beforeCreate() {
			this.$router.push("/home")
		}
	}
</script>

<style>
	
</style>
