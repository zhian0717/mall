<template>
	<div class="order">
		<!-- 主体部分 -->
		<right>
			<div slot="content">
				<h1>订单管理</h1>
				<!-- 搜索框 -->
				<!-- <search title1="按订单号查询"searchtext="订单号"></search> -->
				<!-- 列表 -->
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>订单号ID</th>
							<th>收件人</th>
							<th>订单状态</th>
							<th>订单总价</th>
							<th>创建时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<!-- <tr v-for="(item,index) in orderArr" :key="index" :class="{whitebg:index%2 == 0}">
							<td>
								<a href="#">{{item.number}}</a>
							</td>
							<td>{{item.name}}</td>
							<td>{{item.state}}</td>
							<td>{{item.price}}</td>
							<td>{{item.time}}</td>
							<td>
								<a href="#">查看</a>
							</td>
						</tr> -->
					</tbody>
				</table>
				<!-- 分页 -->
				<!-- <paging></paging> -->
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
</style>
