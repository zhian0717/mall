<template>
	<div class="category">
		<!-- 主体部分 -->
		<right>
			<div slot="content">
				<h1>品类管理</h1>
				<!-- 添加按钮 -->
				<!-- <add text="添加品类"></add> -->
				<!-- 分类id -->
				<p class="fenlei">当前商品分类ID：
					<span>0</span>
				</p>
				<!-- 列表 -->
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>品类ID</th>
							<th>品类名称</th>
							<th>操作</th>
						</tr>
					</thead>
					<!-- <tbody>
						<tr v-for="(item,index) in categoryArr" :key="index" :class="{whitebg:index%2 == 0}">
							<td>{{item.id}}</td>
							<td>{{item.name}}</td>
							<td>
								<a href="#">修改名称</a>
								<a href="#">查看其子品类</a>
							</td>
						</tr>
					</tbody> -->
				</table>
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
