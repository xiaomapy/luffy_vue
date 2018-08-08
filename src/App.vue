<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">路飞学城</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!-- 写死的状态 -->
            <!--<li class="active"><router-link to='/'>我的首页</router-link></li>-->
            <!--<li><router-link to='/note'>我的笔记</router-link></li>-->


            <!-- 应该用一个for动态出去所有路由 -->
            <!-- <router-link
              v-for='(route,index) in allRoutes'
              v-bind:to='route.path'
              v-bind:key=index
              tag='li'
              activeClass='active'
              exact
            >
              <a>{{route.name}}</a>
            </router-link> -->
          </ul> 
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {}
  }
 
}
</script>

<style>

</style>
