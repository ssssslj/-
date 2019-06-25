<template>
<div>
    <MyHeader/>
    <div class="indexmain">
		<div class="news_left">
			<h1>学院新闻</h1>
			<ul v-bind="ul">
				<a v-for="(item,index) in ListArticle.articleList" key="item.id" v-if="(index < 5)"><li>{{item.title}}</li></a>
				
			</ul>
		</div>
			
		<img src="http://localhost:8080/static/img/education.png" style="float: right; margin-top: 60px;"/>
			
	</div>
		
	<div class="ed_link">
		<ul>
			<li>友情链接</li>
			<a href="#"><li class="ed_link_li">河南大学</li></a>
			<a href="#"><li class="ed_link_li">河南省阳光信息平台</li></a>
			<a href="#"><li class="ed_link_li">中国大学生在线</li></a>
			<a href="#"><li class="ed_link_li">河南省教育厅</li></a>
			<a href="#"><li class="ed_link_li">中国教育科研网</li></a>
					
		</ul>
	</div>
    <MyFooter/>
</div>
</template>

<script>
import MyFooter from '../../components/footer.vue'
import MyHeader from '../../components/header.vue'
import education from './education'
export default {
  name: 'education',
  components: {
    MyHeader,
    MyFooter
  },
   data(){
	  return{
      ListArticle:{
			articleList:[],
			currentCount:'',
			currentPage:0,
			totalCount:'',
			totalPage:''
		}
	  }
   },
   methods:{
	   getData(){
	   var _this = this;
       this.axios.post('/api/TeachSystem/TeachSystem/ListAcademicArticle')
        .then(function (response) {
	     
		  _this.ListArticle.articleList = response.data.ListArticle.articleList;
		  _this.currentCount = response.data.ListArticle.currentCount;
		  _this.currentPage = response.data.ListArticle.currentPage;
		  _this.totalCount = response.data.ListArticle.totalCount;
		  _this.totalPage = response.data.ListArticle.totalPage;
        })
        .catch(function (error) {
          alert(error)
	    })
	   }
   },
   created(){ 
	   this.getData();   
	   
   },		
}
</script>
