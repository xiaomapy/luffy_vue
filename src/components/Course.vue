<template>
	<div class=''>
		<courseList
			v-for='course in courseList'
			v-bind:course='course'
			v-bind:key='course.id'
		>
			{{course}}
		</courseList>>
	</div>

</template>

<script>
	  export default {
  	name:'courseList',
    data:function(){
      return {
        
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

<style>
</style>