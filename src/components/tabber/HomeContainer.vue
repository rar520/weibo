<template>
  <div class="homeContainer">
    <!--头部Header区域-->
    <mt-header title="关注" fixed>
      <mt-button slot="left" class="mui-icon mui-icon-camera"></mt-button>
      <mt-button slot="right" class="mui-icon-extra mui-icon-extra-sweep"></mt-button>
    </mt-header>
    <!--头部Header区域-->
    <!-- 中间content区域 -->
      <router-link class="mui-card" v-for="item   in weibodata" :key="item.WeiBo_id" :to="'/home/content/'+item.WeiBo_id" tag="div">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
            </div>
            <div class="mui-media-body">
              <h3>{{item.nickName}}</h3>
              <p>{{item.releasetime}}<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              {{item.weibo_content}}
          </div>
          <div class="mui-card-footer">
            <router-link :to="'/home/content/'+item.WeiBo_id" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">{{item.commentCount}}</span></router-link>
            <router-link to="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like" @click="toggleClass(item.WeiBo_id,item.user_id,item.likeCount),addlike(),select(item)" :class="{'actived' : item.selected}">{{item.likeCount}}</span></router-link>
          </div>
      </router-link>
      <!-- <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang2.jpg" alt="大帅哥">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang3.jpg" alt="小帅哥">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang4.jpg" alt="男模">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang5.jpg" alt="女模">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div> -->
    <!-- 中间content区域 -->
    <v-footer :childmsg='num'></v-footer>
  </div>
</template>
<script>
import footer from '../footer/footer.vue';
export default {
  data () {
    return {
      //用来保存点赞的状态
        likeStatus : false,
        weibodata : [],
        num : 0
        //保存用户的id
        // useriddata : [],
        // weiboiddata : [],
        // weibolikedata : []
    }
  },
  components:{
    'v-footer':footer
  },
  methods : {
    //获取所有微博的所有正文
    getAttentionData() {
      this.$http.get('homepage/homepage')
      .then(result=> {
        if(result.body.status==1){
          this.weibodata=result.body.object
         console.log(this.weibodata)
      // this.weibodata.forEach(element => {
      //      this.weiboiddata=this.weiboiddata.concat(element.WeiBo_id)
      //      this.useriddata=this.useriddata.concat(element.user_id)
      //      this.weibolikedata=this.weibolikedata.concat(element.likeCount)
      //    });
      //      console.log(this.weiboiddata)
      //      console.log(this.useriddata)
      //      console.log(this.weibolikedata)
        }
      })
    },
    //点赞的变化处理
    toggleClass(weiboid,userid,likenum) {
      this.likeStatus=!this.likeStatus
      this.$http.post('user/praise/weibo',{
        userid : userid,
        weiboid : weiboid
      }).then(result => {
        if(result.body.status==1){

        }
      })
    },
    select (item) {
      console.log(item)
      item.selected=!item.selected
    },    
    getInfo(){
      this.$http.get('user/massage').then(result=>{
        if(result.body.status==1){
          this.num=result.body.object.length;
        }
      })
    }

  },
  created () {
    this.getAttentionData();
    this.getInfo();
  }
}
</script>
<style lang="scss" scoped>
// 容器的样式
.homeContainer {
  padding-top:60px;
  padding-bottom:50px;
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
// 中间区域的样式
.mui-card-header {
  height: 70px;
  .touxiang-image {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    width: 55px;
    height: 55px;
    img {
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
    }
  }
}
  .mui-media-body {
    padding-top:5px;
    padding-left: 18px;
    h3 {
      font-size:16px;
      font-weight: bold;
    }
    .device {
      margin-left:6px;
    }
  }
    .mui-card-content {
    padding: 5px;
    line-height: 22px;
  }
  .mui-card-footer {
    justify-content: space-around;
    .mui-card-link {
      color:#636363;
  }
      .noactived {
        color: #2b2b2b;
      }
      .actived {
      color:#ff8200;
    }
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
</style>



