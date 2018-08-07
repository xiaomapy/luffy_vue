<template>
  <div class="hello">
    <div
      v-for='course in courseList'
      v-bind:course='course'
      v-bind:key='course.id'
    >
      <span>专题课ID:{{course.id}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span>专题课名:{{course.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{ // 从vuex中取数据，放在计算属性中取
      courseList:function(){
        // 从当前的vue大仓库取数据
        return this.$store.state.courseList
      }
    }
}
</script>

</style>
