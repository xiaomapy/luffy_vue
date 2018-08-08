import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/course',
      name: '课程页面',
      component: Course
    }
  ]
})
