<template>
<div class="app-container">
  <!--头部Header区域-->
  <mt-header title="关注" fixed>
    <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>

  <!--头部Header区域-->
  <!--中部展示区域-->
  <transition>
    <router-view></router-view>
  </transition>
  <!--中部展示区域-->
  <!--底部Tabber区域-->
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item-mr" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item-mr" to="/member">
      <span class="mui-icon mui-icon-contact">
      </span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item-mr" to="/shopcar">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
      </span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item-mr" to="/search">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
  <!--底部Tabber区域-->
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container {
  padding-top:68px;
  padding-bottom:83px;
  overflow-x: hidden;
}
/* 头部区域的样式 */
.mint-header.is-fixed {
  z-index:99
}
.mint-header {
  background-color: #f7f6f5;
}
</style>
