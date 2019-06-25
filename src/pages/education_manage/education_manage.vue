<template>
<div>
    <MyHeader/>
    <div class="main">
		<div class="addit" id="addit">添加账户</div>				
		<form id="add_form" @submit.prevent="adduser($event)">
			<input type="text" name="AcademicUser.nickname" v-model="AcademicUser.nickname" placeholder="学院名称" class="addname">
			<input type="text" name="AcademicUser.name" v-model="AcademicUser.name" placeholder="账号" class="addname">
			<input type="text" name="AcademicUser.password" v-model="AcademicUser.password" placeholder="密码" class="addpassword">
			<input type="submit" name="submit"  value="添加" class="addschool">
		</form>
			
		<ul v-bind="ul">
			<a href="school_single.html" v-for="(item,index) in ListUser" key="item.id" v-if="(item.bool)">
				<li>{{item.nickname}}<span class="using">正常</span></li>
			</a> 
			<a href="school_single.html" v-for="(item,index) in ListUser" key="item.id" v-if="(!item.bool)">
				<li>{{item.nickname}}<span class="freeze">已冻结</span></li>
			</a> 	
		</ul>
	</div>
    <MyFooter/>
</div>
</template>

<script>
import MyFooter from '../../components/footer.vue'
import MyHeader from '../../components/header.vue'
import education_manage from './education_manage'

export default {
  name: 'education_manage',
  components: {
    MyHeader,
    MyFooter
  },
   data(){
	  return{
		  ListUser:[],
		  AcademicUser:{
			  nickname:'',
			  name:'',
			  password:'',
		  }
	  }
   },
   methods:{
	   getData(){
	   var _this = this;
       this.axios.post('/api/TeachSystem/TeachSystem/ListAcademicUser')
        .then(function (response) {
	     
		  _this.ListUser = response.data.ListUser;
        })
        .catch(function (error) {
          alert(error)
	    })
	   },
	   adduser(event){
		
		var _this = this;
		var formData = new FormData(event.target)
		this.axios.post('/api/TeachSystem/TeachSystem/SetAcademicUser',formData,{
        emulateJSON: true
      })
        .then(function (response) {
	     
		 alert(response.data.addsuccess)
        })
        .catch(function (error) {
          alert(error)
	    }) 
	   }
   },
   created(){
	   this.getData();
	 
      
   }
}
</script>
