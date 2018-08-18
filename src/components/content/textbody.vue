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
              {{weibocontent.nickName}}
              <p>{{weibocontent.releasetime}}<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
             {{weibocontent.weibo_content}}
          </div>
      </div>
      <div class="brContainer"></div>
      <div class="tabContainer">
        <ul class="text-tab" id="text-tab">
          <!-- 通过isactived==index来判断是否添加actived类 -->
          <li v-for="(item,index) in tablist" :key="index" :class="{actived:isactived==index}" @click="isactived=index,toggle('tab'+(index+1))">
            <span>{{item.title}}&nbsp;{{item.num}}</span>
          </li>
        </ul>
        <div id="content" class="contnet">
          <component :is='currnetView' :id="dataId" keep-alive></component>
        </div>
    </div>
    </div>
    <!-- 中间内容区域 -->
  </div>
</template>
<script>
import Commenting from '../subcomponent/comment.vue'
import Like from '../subcomponent/like.vue'
export default {
    data () {
      return {
          //用来保存tab的数据
          tablist : [],
          //来保存被点击的下标
          isactived:0,
          //来保存的子组件的name
          currnetView : 'tab1',
          //用来保存点击微博的id值
          dataId : this.$route.params.id,
          //保存一条微博的信息
          weibocontent : {},
      }
    },
    methods : {
      //替换子组件,I传递参数来改变展示不同的子组件
      toggle(arg) {
        this.currnetView=arg;
      },
    showContent() {
      this.$http.get('homepage/homepage').then(result => {
        if(result.body.status==1) {
          var weibocontentlist=result.body.object;
          weibocontentlist.forEach(element => {
            if(element.WeiBo_id==this.dataId) {
              this.weibocontent=element;
              // console.log(this.weibocontent)
            }
          });
        }
      })
    },
    //改变tablist的方法
    changeTabList () {
      this.tablist=[
        {comment : 'tab1',title : "评论",num : this.weibocontent.commentCount},
        {like : 'tab2',title : "赞",num : this.weibocontent.likeCount}
      ]
    }
    },
    created () {
      this.showContent();
      this.changeTabList();
    },
    //把子组件挂在到父组件
    components : {
      "tab1" : Commenting,
      "tab2" : Like
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
    line-height: 22px;
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
</style>


