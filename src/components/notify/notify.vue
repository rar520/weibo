<template>
    <div>
      <header>
        <p>通知</p>
      </header>
      <div class="content">
        <ul>
          <li v-for="(item,i) in list" :key="i">
            <router-link to="'/home/content'+list[i].weibo_id">
              <div class="up">
                <div><router-link to="'/personal'+list[i].comment_user_id"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div>
                  <p><router-link to="'/personal'+list[i].comment_user_id"><span>{{list[i].comment_nick_name}}</span></router-link>评论了你的微博</p>
                  <p>{{list[i].comment_content}}</p>
                </div>
                <div>{{list[i].weibo_content}}</div>
              </div>
              <div class="down">
                <span>{{list[i].comment_date}}</span>        
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-mr" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/notify">
          <span class="mui-icon mui-icon-email-filled">
            <span class="mui-badge" id="badge">9</span>
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
  name: 'notify',
  data () {
    return {
      list:[
        {
          comment_user_id:'',
          comment_nick_img:'',
          comment_nick_name:'小可爱',
          comment_content:'我是你的小可爱',
          weibo_id:'',
          weibo_content:'这是我发的微博',
          comment_date:'7-14'
        },
        {
          comment_user_id:'',
          comment_nick_img:'',
          comment_nick_name:'美少女',
          comment_content:'我是你的美少女',
          weibo_id:'',
          weibo_content:'这是我发的微博',
          comment_date:'7-13'
        }
      ]
    }
  },
  created(){
    this.getInfo();
  },
  methods:{
    getInfo(){
      this.$http.get('homepage/homepage').then(result=>{
        console.log(result.body)
        // this.list.push({
        //   comment_nick_img:'',
        //   comment_nick_name:'美少女',
        //   comment_content:'我是你的美少女',
        //   weibo_content:'这是我发的微博',
        //   comment_date:'7-14'
        // })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  color: black;
}
header{
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index:99;
  background-color: white;
  border-bottom: 1px gray solid;
}
header p{
  color: black;
  text-align: center;
  line-height: 8vh;
}
.content{
  width: 100%;
  position: relative;
  top:8vh;
}
.content ul li{
  height:16vh;
  margin-top: 2vh;
}
.content ul li .up{
  height: 10vh;
  position:relative;
}
.content ul li .up div:nth-child(1){
  width: 55px;
  height: 55px;
  position: absolute;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
}
.content ul li .up div:nth-child(1) img{
  width: 55px;
  height: 55px;
}
.content ul li .up div:nth-child(2){
  height: 100%;
  position: absolute;
  left: 20%;
  right:20%;
}
.content ul li .up div:nth-child(2) p{
  width: 100%;
  height: 50%;

}
.content ul li .up div:nth-child(2) p span{
  color:#0941f7
}
.content ul li .up div:nth-child(3){
  width: 70px;
  height: 10vh;
  position: absolute;
  right: 0;
}
.content ul li .down{
  height: 6vh;
  position:relative;
  border-bottom: 1px solid gray;

}
.content ul li .down span:nth-child(1){
  position:absolute;
  left:25%;
  bottom: 2vh;
}
.mui-bar {
  background-color: #fafafa;
  height: 50px;
  bottom: -1px;
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