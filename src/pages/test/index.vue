<template>
<div>
  <form class="form" @submit.prevent="submit($event)" name="form" id="form">
    <input type="text" name="username" id="username" v-model="user.username" class="username" placeholder="请输入用户名">
    <input type="password" name="password" id="password" v-model="user.password" class="password" placeholder="请输入密码">
    <input type="submit" name="submit" value="登录" class="submit">
    <input type="submit" value="重置" class="reset">
  </form>
  <MyFooter/>
</div>
</template>

<script>

import MyFooter from '../../components/footer.vue'
export default {
  name: 'index',
  components: {
    MyFooter
  },
  data(){
    return{
      user:{
        username:'',
        password:''
      }
    }
  },

  methods: {
    submit(event){
      // let param = new URLSearchParams()
      // param.append('username',this.username)
      // param.append('password',this.password)
      var formData = new FormData(event.target)
      
      this.axios.post('/api/TeachSystem/LoginAction', formData,{
        emulateJSON: true
      }
      )
      .then(function (response) {
        if(response.data.Login){
          window.location.href='../education.html'
        }else{
          alert("账号密码错误")
        }
        
      })
      .catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>

<style>

</style>
