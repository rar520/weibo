<template>
  <div class="textbodyContainer">
    <!-- 头部header区域 -->
    <mt-header title="微博正文" fixed>
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 头部header区域 -->
    <!-- 中间内容区域 -->
    <div class="text-content">
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
      </div>
      <div class="brContainer"></div>
      <div class="tabContainer">
        <ul class="text-tab" id="text-tab">
          <!-- 通过isactived==index来判断是否添加actived类 -->
          <li v-for="(item,index) in tablist" :key="index" :class="{actived:isactived==index}" @click="isactived=index,toggle('tab'+(index+1))">
            <span>{{item.title}}&nbsp;{{item.num}}</span>
          </li>
          <!-- <li class="actived" @click="toggle(tab02Text)">
            <span>评论&nbsp;199</span>
          </li>
          <li @click="toggle(tab03Text)">
            <span>赞&nbsp;99</span>
          </li> -->
        </ul>
        <div id="content" class="contnet">
          <component :is='currnetView' keep-alive></component>
        </div>
        <!-- <div id="content" class="content">
          <div>转发的列表</div>
          <div class="actived">评论的列表</div>
          <div>点赞的列表</div>
        </div> -->
    </div>
    </div>
    <!-- 中间内容区域 -->
    <!-- 底部tabbar区域 -->
    <div class="mui-card-footer">
      <router-link to="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">转发</span></router-link>
      <router-link to="/home/content/comment" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">评论</span></router-link>
      <router-link to="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">赞</span></router-link>
    </div>
    <!-- 底部tabbar区域 -->
  </div>
</template>
<script>
import Commenting from '../subcomponent/comment.vue'
import Like from '../subcomponent/like.vue'
import Transmit from '../subcomponent/transmit.vue'
export default {
    data () {
      return {
          //用来保存tab的数据
          tablist : [
            {transmit : 'tab1',title : "转发",num : 239},
            {comment : 'tab2',title : "评论",num : 199},
            {like : 'tab3',title : "赞",num : 99}
          ],
          //来保存被点击的下标
          isactived:1,
          //来保存的子组件的name
          currnetView : 'tab2'
      }
    },
    methods : {
      //替换子组件,传递参数来改变展示不同的子组件
      toggle(arg) {
        this.currnetView=arg;
      }
    },
    //把子组件挂在到父组件
    components : {
      "tab1" : Transmit,
      "tab2" : Commenting,
      "tab3" : Like
    }
}
</script>
<style lang="scss" scoped>
.textbodyContainer {
  padding-top:60px;
  padding-bottom:44px;
  overflow-x: hidden;
}
/* 头部区域的样式 */
.mint-header.is-fixed {
  z-index:99
}
.mint-header {
  background-color: #fafafa;
  color: #929292;
  height:60px;
  align-content: center;
  font-size: 18px;
  color: #2b2b2b;
}
.mint-header .mint-button {
  font-size:29px;
}
// 中部区域的样式
.mui-card-header {
  height: 70px;
  .touxiang-image {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    width:55px;
    height:55px;
    img {
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
    }
  }
}
  .mui-media-body {
    font-weight: bold;
    .device {
      margin-left:6px;
    }
  }
  .mui-card-content {
    padding: 5px;
  }
  .brContainer {
    height: 17px;
    width: 100%;
    background: #efefef;
  }
  .text-tab {
    width: 100%;
    height: 40px;
    color: #7f7f7f;
    padding: 10px 10px;
    vertical-align:middle;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      width: 18%;
      color: #8b8b8b;
      margin: 15px 5px;
    }
    li.actived {
      span{
        border-bottom: 1px solid #ff7c00;
      }
    }
  }
  .content {
    div{
      display:none;
    }
    div.actived{
      display:block;
    }
  }



// 底部区域的样式
  .mui-card-footer {
      width:100%;
      background: #efefef;
      position:fixed;
      bottom:-1px;
      justify-content: space-around;
      z-index: 99;
    .mui-card-link {
      color:#636363;
      .mui-icon-mr {
        font-family: Muiicons;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
    }
    .mui-icon-extra-mr {
        font-family: MuiiconSpread;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
  }
  }
}
</style>


