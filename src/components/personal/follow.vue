<template>
  <div class="focus">
    <div class="header">
      <span class="mui-icon mui-icon-arrowleft"></span>
      <router-link to="personal" tag="a"><span>返回</span></router-link>
      <h2>关注</h2>
    </div>
    <div class="content">
      <router-link class="clearfix" v-for="(item,i) in followData" :key="i" tag="div" to="'personalId'+item.user_id"> 
        <img src="../../../static/img/head.png">
        <h4>{{item.nickName}}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      followData:[]
    }
  },
  methods:{
    getInfor(){
      this.$http.get('user/focus/select').then(result=>{
        if(result.body.status==1){
          this.followData=result.body.object;
        }
        colsole.log(result.body);
      })
    }
  },
  created(){
    this.getInfor();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .focus{
    width:100%;
    padding-top:60px;
    }
  .header{
    position:fixed;
    top:0px;
    width:100%;
    height:60px;
    background-color:#f1edeb;
    z-index: 99;
  }
  .header span{
    font-size: 35px;
    line-height:60px;
    display: inline;
  }
  .header a{
    height:60px;
    position: absolute;
    left:8%;
  }
  .header a span{
    font-size:28px;
    color:#000;
    text-decoration:none;
    line-height:60px;
  }
  .header h2{
    font-size:30px;
    line-height: 60px;
    margin: 0;
    padding:0;
    display: inline;
   position:absolute;
   left:46%
  }
  .content div{
    width:100%;
    height:185px;
    border-top:1px #e6e6e6 solid;
    position: relative;
  }
  .content div img{
    float:left;
    padding-left:3%;
    padding-top:22px;
    padding-right:5%;
  }
  .content div h4{
    font-size:28px;
    position:absolute;
    left:45%;
    top:20%;

  }
  .content div span{
    font-size: 18px;
    color:#6e6e6e;
    position:absolute;
    top:40%;
    left:45%;
  }
  .content div p{
    position:absolute;
    color:#929292;
    font-size:20px;
    top:55%;
    left:45%;
  }
</style>
