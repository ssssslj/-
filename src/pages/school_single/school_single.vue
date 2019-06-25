<template>
<div>
    <MyHeader/>
    <div class="main">
		<div class="school_massage">
			<table border="1">
				<tr>
					<th class="school_massage_name">学院名称</th>
					<th class="school_massage_m">计算机与信息工程学院</th>
				</tr>
				<tr>
					<td class="school_massage_name">密码</td>
					<td class="school_massage_m">admin123456</td>
				</tr>
			</table>
				
			<div class="do_school">
				<button>冻结账户</button>
				<button>删除账户</button>
			</div>
		</div>
	</div>
    <MyFooter/>
</div>
</template>

<script>
import MyFooter from '../../components/footer.vue'
import MyHeader from '../../components/header.vue'
import school_single from './school_single'

export default {
  name: 'school_single',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>