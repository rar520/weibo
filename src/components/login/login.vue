<template>
    <div>
      <h1>请输入账户名和密码</h1> 
      <router-link to="/before_login">
        <span class="mui-icon mui-icon-closeempty"></span>
      </router-link>
      <form action="">
        <input type="text" placeholder="请输入账户名" v-model="userid" v-focus/>
        <input type="password" placeholder="请输入密码" v-model="password" />
        <!-- <router-link to="/home"> -->
          <input type="submit" value="登录" id="login" @click="postInfro" />
        <!-- </router-link> -->
      </form>
    </div>
</template>

<script>
import { Toast } from "mint-ui"; 
import '../../../static/js/jquery.min.js'
export default {
  name: 'login',
  data () {
    return {
      userid:'',
      password:'',
    }
  },
  methods:{
    postInfro(){
      if(this.userid.trim().length === 0 && this.password.trim().length === 0){
          return Toast("账号密码不能为空！");
        }
        else{
          this.$http.post('http://192.168.0.108:8080/check',{
            'userid':this.userid,'password':this.password
          })
          .then(function (result) {
            console.log(result.body.status);
          })
          .catch(function (error) {
            console.log("error");
          });
        }
      }

    // request(){
    //   var _this=this;
    //   $.ajax({
    //     xhrFields:{
    //       withCreddentials:true
    //     },
    //     type: 'post',
    //     url:'http://192.168.0.108:8080/check',
    //     dataType:'json',
    //     data:{'userid':this.userid,'password':this.password},
    //     success:function(res){
    //       console.log(res.body)
    //     },
    //     error(err){
    //       console.log(err)
    //     }
    //   })
    // }

  },
         
          
      // blurUserid(){
      //   if(this.userid.trim().length === 0){
      //     return Toast("账号不能为空！");
      //   }
      // },
      // blurPassword(){
      //   if(this.password.trim().length === 0){
      //       return Toast("密码不能为空！");
      //   }
      // }
  directives:{
    'focus':{
      inserted(el){
        el.focus();
      }
    }
  },
  created(){
  }
}
</script>

<style scoped>
  div{
    font-family:楷体;
    padding-top:30%;
    position:relative;
  }
  span{
    font-size: 65px;
    position: absolute;
    top: 6vh;
    left: 4%;
  }
  h1{
    font-family:楷体;
    font-size:30px;
    line-height:10vh;
    margin-bottom:6vh;
    margin-left:10%;
  }
  input{
    width: 80%;
    height: 8vh;
    font-size: 22px;
    font-family: 楷体;
    border-radius: 4px;
    border: 1px #a0a0a0 solid;
    margin-left: 11%;
    margin-bottom: 6vh;
    padding-left: 5%;
  }
  input:nth-of-type(2){
    margin-bottom:10vh;
  }
  input#login{
    width: 30%;
    height: 7vh;
    font-size: 25px;
    color: #ffffff;
    border: 1px #eedcc8 solid;
    background-color: #ffd8af;
    margin-left: 38%;
    padding:0;
    text-align:center;
  }
  input:nth-of-type(3):hover{
    background-color:#fe8101;
    border:0;
  }
</style>
