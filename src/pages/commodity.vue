<template>
	<div class="commodity">
		<!-- 主体部分 -->
		<right>
			<div slot="content">
				<h1>商品管理</h1>
				<!-- <search title1="按商品id查询" title2="按商品名称查询" searchtext="关键词"></search>
				<add text="添加商品"></add> -->
				<!-- 列表 -->
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>id</th>
							<th>信息</th>
							<th>价格</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<!-- <tr v-for="(item,index) in commodityArr" :key="index" :class="{whitebg:index%2 == 0}">
							<td>{{item.id}}</td>
							<td>
							<p>{{item.msg}}</p>
							<p>{{item.classification}}</p>
							</td>
							<td>{{item.price}}</td>
							<td>{{item.state}}</td>
							<td>
								<router-link to="/commodity/detail" tag="a">查看</router-link>
								<a href="#">编辑</a>
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
