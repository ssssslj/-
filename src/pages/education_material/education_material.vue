<template>
<div>
    <MyHeader/>
    <div class="main">
		<ul v-bind="ul">
			<a v-for="(item,index) in ListArticle.articleList" key="item.id"  v-if="(index < 5)"><li><p>{{item.title}}</p><span>{{item.time}}</span></li> </a>
		</ul>
	</div>
    <MyFooter/>
</div>
</template>

<script>
import MyFooter from '../../components/footer.vue'
import MyHeader from '../../components/header.vue'
import education_material from './education_material'

export default {
  name: 'education_material',
  components: {
    MyHeader,
    MyFooter
  },
  data(){
    return{
      ListArticle:{
			  articleList:[	
			  ],
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
    this.axios.post('/api/TeachSystem/TeachSystem/ListAcademicArticle').then(function (response) {  
		  _this.ListArticle.articleList = response.data.ListArticle.articleList;
		  _this.currentCount = response.data.ListArticle.currentCount;
		  _this.currentPage = response.data.ListArticle.currentPage;
		  _this.totalCount = response.data.ListArticle.totalCount;
		  _this.totalPage = response.data.ListArticle.totalPage;
      }).catch(function (error) {
          alert(error)
	    })
	  }
  },
   created(){ 
	   this.getData();   
   }
}
</script>