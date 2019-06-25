<template>
    <div class="head">
			<div class="head_in">
				<img src="http://localhost:8080/static/img/logo.png" />
				<span>办公系统-教务端</span>
			</div>

			<ul>
				<li><a href="education.html" class="head_a">首页</a></li>
				<li><a href="education_manage.html" class="head_a">用户管理</a></li>
				<li><a href="education_material.html" class="head_a">材料列表</a></li>
				<!-- <li><a href="#" class="head_a">提交材料</a></li> -->
				<li><a href="http://zs.henu.edu.cn/" class="head_a">招生信息</a></li>
				<li><a href="index.html" class="head_a">退出登录</a></li>
			</ul>
		</div>
</template>
<script>
export default {
  name: 'MyHeader'
}
</script>
