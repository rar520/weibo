<template>
    <div>
      <header>
        <p>通知</p>
      </header>
      <div class="content">
        <ul>
          <li v-for="(item,i) in newlist" :key="i">
            <router-link to="'/home/content'+item.WeiBo_id">
              <div class="up">
                <div><router-link to="'/personal'+item.commentuser_id"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div>
                  <p><router-link to="'/personal'+item.commentuser_id"><span>{{item.nick_name}}</span></router-link>评论了你的微博</p>
                  <p>{{item.comment_content.substring(0,15)}}</p>
                </div>
                <div>{{item.weibo_content.substring(0,20)}}</div>
              </div>
              <div class="down">
                <span>{{item.comment_date | dataFormat}}</span>        
              </div>
            </router-link>
          </li>
          <input type="button" value="点击加载更多..." v-show="flag1" id="btn" @click="showmore"/>
          <input type="button" value="已全部加载完成" v-show="flag2" id="btn" disabled>
        </ul>
      </div>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-mr" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/notify">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge" id="badge">{{list.length}}</span>
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
      flag1:true,
      flag2:false,
      count:1,
      newlist:[],
      list:[]
    }
  },
  created(){
    this.getInfo();
  },
  methods:{
    showmore(){
        this.count++;
        this.makelist(this.count,this.list);
    },
    makelist(count,list){
        for(var i=(this.count-1)*5;i<this.count*5&&i<this.list.length;i++){
          this.newlist.push(this.list[i])
        }
        if(i==this.list.length){
          this.flag1=false;
          this.flag2=true;
        }
    },
    getInfo(){
      this.$http.get('user/massage').then(result=>{
        if(result.body.status==1){
          this.list=result.body.object;
          this.makelist(this.count,this.list);
        }
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
  font-size: 18px;
}
.content{
  width: 100%;
  position: absolute;
  top:8vh;
}
.content ul{
  margin-bottom: 8vh;
}
#btn{
  width: 100%;
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
  margin-left:20%;

}
.content ul li .down span:nth-child(1){
  position:absolute;
  left:20%;
  bottom: 2vh;
}
.mui-bar {
  background-color: #fafafa;
  height: 8vh;
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