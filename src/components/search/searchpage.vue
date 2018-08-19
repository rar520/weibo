<template>
  <div class="page">
      <div class="header">
          <form>
             <router-link to="/home"><span class="mui-icon mui-icon-back"></span></router-link>
            <input type="text" class="input" placeholder="搜索" v-model="gz">
            <router-link to="/searchpage" class="a"><input type="submit" value="搜索" @click="open" @focus="show"></router-link>
          </form>      
      </div>
      <router-link v-for="item in weibodata1" :key="item.WeiBo_id" :to="'/personal/'+item.WeiBo_id" tag="div">
      <div class="main">
          <p>相关用户</p>
          <ul>
              <li><img src="../../../static/img/1.png"></li>
              <p>{{mingxing}}</p>
              <!-- <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li> -->
          </ul>
      </div>
      </router-link>
      <div class="footer">
          <p>热门</p>
          <!-- 中间content区域 -->
      <router-link class="mui-card" v-for="item in weibodata" :key="item.WeiBo_id" :to="'/home/content/'+item.WeiBo_id" tag="div">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="萌妹子">
            </div>
            <div class="mui-media-body">
                <h4>{{item.nick_name}}</h4>
                <p>{{item.releasetime}}<span class="device">来自微博自微博weibo.com</span></p >
            </div>
          </div>
          <div class="mui-card-content">
              {{item.weibo_content}}
              <!-- 我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据 -->
          </div>
          <div class="mui-card-footer">
            <router-link to="/searchpage" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">{{item.commentmentCount}}</span></router-link>
            <router-link to="/searchpage" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like" @click="toggleClass" :class="{'actived' : likeStatus,'noactived' : !likeStatus}">{{item.likeCount}}</span></router-link>
          </div>
      </router-link>
      <!-- <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="大帅哥">
            </div>
            <div class="mui-media-body">
              王珂
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
              <img src="../../../static/img/1.png" alt="小帅哥">
            </div>
            <div class="mui-media-body">
              王珂
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
              <img src="../../../static/img/1.png" alt="男模">
            </div>
            <div class="mui-media-body">
              王珂
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
              <img src="../../../static/img/1.png" alt="女模">
            </div>
            <div class="mui-media-body">
              王珂
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
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        //用来保存点赞的状态
        likeStatus : false,
        weibodata1 : [
            {
                user_name:'王珂',
                Suohead_image:''
            }
        ],
        weibodata : [
            {
                head_image:'../../../static/img/1.png',
                nick_name:'王珂',
                releasetime:'2018-08-05 17:28:10',
                weibo_content:'我最漂亮',
                commentcouent:'',
                Pointpraise:''
            },
            {
                head_image:'../../../static/img/1.png',
                nick_name:'王珂',
                releasetime:'2018-08-05 17:28:10',
                weibo_content:'我最漂亮',
                commentcouent:'',
                Pointpraise:''
            },
            {
                head_image:'../../../static/img/1.png',
                nick_name:'王珂',
                releasetime:'2018-08-05 17:28:10',
                weibo_content:'我最漂亮',
                commentcouent:'',
                Pointpraise:''
            }
        ],
        gz:'',
        mingxing : ''
    }
  },
  methods :{
     //获取所有微博的所有正文
    getAttentionData() {
        this.$http.post('hot/search',{"emulateJSON":true}).then(result=> {
            if(result.body.status==1){
                this.weibodata=result.body.object;
                // this.weibodata.forEach(element => {
                //      this.mingxing=element.user_name;
                // })
                this.weibodata1=result.body.object;
                console.log(this.weibodata)
                console.log(this.weibodate1)
            }
            // console.log(result.body)
        })
    },
    //点赞的变化处理
    toggleClass() {
        this.likeStatus=!this.likeStatus
    },
    open(){
       this.$http.post('hot/search',{'gz':this.gz},{"emulateJSON":true}).then(result=>{
         if(result.body.status==1){
           console.log(result.body)
           this.weibodata=result.body.object;
           this.weibodata.forEach(element => {
               this.mingxing=element.user_name;
           })
         }
        //  console.log(result.body)
       })
    //    funvtion cookie(key,value){
    //        //设置cookie
    //     function setCookie (key, value, t) {
    //             var oDate = new Date();
    //             oDate.setDate(oDate.getDate() + t);
    //             document.cookie = key + '=' + value + '; expires=' + oDate.toGMTString()
    //         }
    //         //获取cookie
    //         function getCookie (key) {
    //             var arr1 = document.cookie.split(';');
    //             for( var i=0;i<arr1.length; i++ ) {
    //                 var arr2 = arr1[i].split('=');
    //                 if( arr2[0] == key ){
    //                     return decodeURI(arr2[1]);
    //                 }
    //             }
    //         }
    //    }
       

    },
    show(){
        this.mingxing='';
    }
},
created () {
    this.getAttentionData();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    height: 60px;
    background-color: #eee;
    position: relative;
}
.header .mui-icon-back{
    position: absolute;
    top: 30%;
}
/* .header .mui-icon-compose{
    position: relative;
    top: 30%;
    font-size: 30px;
} */
.header .a{
    position: absolute;
    right: 3%;
    top: 25%;
}
.header .input{
    background-color: #dcdcdc;
    border-radius: 5px;
    width: 70%;
    height: 50%;
    position: absolute;
    top: 20%;
    left: 10%;
}
.main{
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 120px;
    background-color: white;
    position: relative;
}
.main p{
    margin: 0;
    position: absolute;
    top: 10px;
    left: 10px;
}
.main ul{
    height: 80px;
    border: 1px #eee solid;
    position:absolute;
    top: 30px;
}
.main ul p{
    font-size: 20px;
    position: absolute;
    top: 40%;
    left: 30%;
}
.main li{
    float: left;
    width: 40%;
    margin: 0 auto;
}
.main img{
    width: 60%;
    height: 10vh;
    display: inline-block;
}
.footer{
    position: relative;
}
.footer p{
    position: absolute;
    font-size: 20px;
    top: -30px;
    left: 3%;
}
.mui-card{
    /* position: absolute; */
    margin-top: 40px;
}
.mui-card-header {
  height: 60px;
}
.mui-card-header .touxiang-image {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    width: 40px;
    height: 40px;
}
.mui-card-header img {
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
}
.mui-media-body {
    font-weight: bold;
    position: relative;
}
.mui-media-body h4{
    position: absolute;
    top: 1px;
}
.mui-media-body p{
    position: absolute;
    width: 600px;
    top: 20px;
    height: 20px;
    left: -2%;
}
.device {
      margin-left:6px;
}
.mui-card-content {
    margin-left: 20px;
}
.mui-card-link {
      color:#636363;
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
</style>
