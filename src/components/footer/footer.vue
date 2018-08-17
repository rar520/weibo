<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-mr" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/notify">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge" id="badge">{{childmsg}}</span>
          </span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item-pb" to="/publish">
          <span class="mui-icon mui-icon-plusempty"></span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/search">
          <span class="mui-icon mui-icon-search">
          </span>
          <span class="mui-tab-label">发现</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/personal">
          <span class="mui-icon mui-icon-person"></span>
          <span class="mui-tab-label">我</span>
        </router-link>
      </nav>
    </div>
</template>
<script>
export default {
    name:'v-footer',
     props:{
        childmsg:Number
    },
    data(){
        return{
           
        }
    },
    create(){
       
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.mui-bar {
  background-color: #fafafa;
  height: 8vh;
  position:fixed;
  bottom:0;
}
.mui-bar-tab .mui-tab-item-mr.router-link-active {
    color: #2b2b2b;
}
.mui-bar-tab .mui-tab-item-mr {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #939393;
}
.mui-bar-tab .mui-tab-item-pb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    background: #ff8200;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



