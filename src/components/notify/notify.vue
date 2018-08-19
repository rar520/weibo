<template>
    <div>
      <!-- 头部 -->
      <header>
        <p>通知</p>
      </header>
      <!-- 内容 -->
      <div class="content">
        <ul>
          <li v-for="(item,i) in newlist" :key="i">
            <router-link :to="'/home/content/'+item.WeiBo_id">
              <div class="up">
                <div><router-link :to="'/personalId/'+item.commentuser_id"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div>
                  <p><router-link :to="'/personalId/'+item.commentuser_id"><span>{{item.nick_name}}</span></router-link>评论了你的微博</p>
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
      <!-- 底部 -->
      <v-footer :childmsg='num'></v-footer>
    </div>
</template>
<script>
import footer from '../footer/footer.vue';
export default {
  name: 'notify',
  data () {
    return {
      flag1:true,
      flag2:false,
      count:1,
      newlist:[],
      list:[],
      num:0
    }
  },
  created(){
    this.getInfo();
  },
  components:{
    'v-footer':footer
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
        if(i==this.list.length||i==0){
          this.flag1=false;
          this.flag2=true;
        }
    },
    getInfo(){
      this.$http.get('user/massage').then(result=>{
        if(result.body.status==1){
          this.list=result.body.object;
          this.num=result.body.object.length;
          this.makelist(this.count,this.list);
        }else{
          console.log("无数据")
        }
      }).catch(result=>{
        console.log("请求数据失败")
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
  padding-top:0;
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
</style>