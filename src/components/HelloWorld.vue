<template>
  <div class="hello">
   <h1>这是首页</h1>
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
