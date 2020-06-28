const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Commodity from '@/pages/commodity'
import Category from '@/pages/category'
import Order from '@/pages/order'
import User from '@/pages/user'


Vue.use(Router)

export default new Router({
  routes: [
		{
		  path:"/",
			component:Index
		},
		{
			 path:"/login",
			component:Login
		},
		{
		  path:"/index",
			component:Index,
			children:[
				{
					 path:"/home",
					component:Home
				},
				{
					 path:"/commodity/index",
					component:Commodity
				},
				{
					 path:"/category/index",
					component:Category
				},
				{
					 path:"/order/index",
					component:Order
				},
				,
				{
					 path:"/user/index",
					component:User
				}
			]
		}
		
  ]
})
