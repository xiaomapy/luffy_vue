<template>
	<div class='container-fluid courseDiv'>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-info">
      <div class="panel-heading">所有课程</div>
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>课程id</th>
              <th>课程名</th>
              <th>选择</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='course in courseList'
                v-bind:course='course'
                v-bind:key='course.id'>
              <td>{{course.id}}</td>
              <td>{{course.name}}</td>
              <td><input 
                type="checkbox" 
                name="tags" 
                value="{{course.id}}"
                v-model='myCourse'
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel panel-success">
      <div class="panel-heading">课程价格</div>
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>价格id</th>
              <th>价钱</th>
              <th>时间</th>
              <th>选择</th>
            </tr>  
          </thead>
          <tbody>
            <ul
              v-for="course in courseList"
              v-bind:price='course'
              v-bind:key='course.id'
            >
              <li>
                <ul
                  v-for='item in course.price_list'
                  v-bind:item='item'
                  v-bind:key='item.pid'
                >
                  <li>id:{{item.pid}}
                    价格：{{item.price}}元
                    时间：{{item.valid_period}}
                  </li>
                  <input 
                  type="checkbox" 
                  name="tags" 
                  value='{{item.pid}}'
                  v-model = 'myPrice'
                  >
                </ul>
              </li>
            </ul>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
	  export default {
  	name:'courseList',
    data:function(){
      return {
        myCourse:'',
        myPrice:''
      }
    },
    computed:{ // 从vuex中取数据，放在计算属性中取
      courseList:function(){
        // 从当前的vue大仓库取数据
        return this.$store.state.courseList
      }

    },
    methods:{
      addCourse:function(){
        var courseObj = {
          myCourse:this.myCourse,
          myPrice:this.myPrice
        }
        this.$store.dispatch(
          'addCourse',
          courseObj
          )
      }
    }
  }
</script>

<style>
.courseDiv{
  margin-top:80px;
}
li{list-style:none}
</style>