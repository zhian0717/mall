<template>
	<div class="right">
		<slot name="content"></slot>
	</div>
</template>

<script>
</script>

<style>
	/* 右边 */
	.right {
		width: 100%;
		margin-top: 60px;
		padding-left: 290px;
		padding-right: 30px;
		padding-bottom: 50px;
		float: left;
		/* overflow: hidden; */
		background: #F3F3F3;
		min-height: calc(100vh - 60px);
		position: relative;
	}
	
	.right h1 {
		margin-top: 30px;
	}
	
	.whitebg {
		background: #F9F9F9;
	}
	
	.table {
		margin-top: 30px;
	}
	
	.pagination {
		border-radius: 0px;
		margin-top: 0;
	}
	
	.pagination>li>a,
	.pagination>li>span {
		padding: 4px 10px;
	}
	
	.pagination>li>a {
		margin-right: 10px;
		border-radius: 10px;
	}
	
	.pagination>li>a {
		font-size: 12px;
		color: #333333;
	}
	
	.pagination>li:first-child>a,
	.pagination>li:first-of-type>span {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		background: #F3F3F3;
		color: #666881;
	}
	
	.pagination>li:last-child>a,
	.pagination>li:last-of-type>span {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	
	}
	
	.pagination>li:last-child>a,
	.pagination>li:last-of-type>a {
		background: #F3F3F3;
		color: #666881;
	}
	
	.pagination>li>a.bluebg {
		background: #2DB7F5;
		color: white;
	}
	
	.pagination span {
		display: inline-block;
		margin-left: 30px;
		line-height: 28px;
		font-size: 12px;
		color: #333333;
	}
	
	.pagination input {
		line-height: 22px;
		width: 40px;
		border-radius: 5px;
		border: 1px solid #D9D9D9;
		padding-left: 8px;
	}
	
	.pagination input:focus {
		border: 1px solid lightblue !important;
	}
</style>
