// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
	state:{
		courseList:[
		'吃饭'
		]
	},
	mutations:{
		// 修改仓库中状态的唯一方法就是通过提交mutation来实现
		INITNOTE:function(state,courseList){
			state.courseList = courseList
		}
	}
	
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>',
  beforeMount:function(){
  	// 在vue数据未被挂载之前；就应该将后端的数据取到；发送ajax来取。
  	var _this = this
  	// 使用axios向后端请求数据
  	axios.get('http://127.0.0.1:8000/api/v1/courses/')
  		.then(function(response){
  			console.log(response.data.data);
  			_this.$store.commit('INITNOTE',response.data.data)
  		})
  		.catch(function(error){
  			console.log(error)
  		})


  	/* 通过原始jquery的ajax来向后端请求数据。
  	jQuery.ajax({
  		url:'http://127.0.0.1:8000/api/notes/',
  		type:'get',
  		success:function(data){
  			console.log(data)
  			// _this.$store.state.noteList = data.data 不规范，修改store数据在mutation中
  			_this.$store.commit('INITNOTE',data.data)
  		}
  	})
  	*/
  }
})
