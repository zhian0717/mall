<template>
	<div class="user">
		<!-- 主体部分 -->
		<right>
			<div slot="content">
				<h1>用户管理</h1>
				<!-- 列表 -->
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>ID</th>
							<th>用户名</th>
							<th>邮箱</th>
							<th>电话</th>
							<th>注册时间</th>
						</tr>
					</thead>
					<tbody>
						<!-- <tr v-for="(item,index) in userArr" :key="index" :class="{whitebg:index%2 == 0}">
							<td>{{item.id}}</td>
							<td>{{item.user}}</td>
							<td>{{item.email}}</td>
							<td>{{item.phone}}</td>
							<td>{{item.time}}</td>
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
