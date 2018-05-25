<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/goodsList">商品列表</router-link></li>
      <li><router-link to="/goodsDetail">商品详情</router-link></li>
      <li><router-link to="/userCenter">个人中心</router-link></li>
      <li><router-link to="/editInfo">编辑信息</router-link></li>
      <li><router-link to="/login">登录</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
