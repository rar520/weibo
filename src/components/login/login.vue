<template>
    <div>
      <h1>请输入账户名和密码</h1> 
      <router-link to="/before_login">
        <span class="mui-icon mui-icon-closeempty"></span>
      </router-link>
      <form action="">
        <input type="text" placeholder="请输入账户名" v-model="userid" @blur="blurUserid" v-focus/>
        <input type="password" placeholder="请输入密码" v-model="password" @blur="blurPassword" />
        <router-link to="/home">
          <input type="submit" value="登录" id="login" @click="postInfro" />
        </router-link>
      </form>
    </div>
</template>

<script>
import { Toast } from "mint-ui"; 
export default {
  name: 'login',
  data () {
    return {
      userid:'',
      password:''
    }
  },
  methods:{
    postInfro(){
        //把帐户名和密码、头像 发送给后台
        this.$http.post('check',{'userid':this.userid.trim(),'password':this.password.trim()})
        .then(function(result){
            console.log(result.body);
            if(result.body.status == 1){
              console.log("登陆成功!");
            }
            else{
              console.log(result.body.status);
              return Toast("账号或密码错误！");
            }
        })
      },
      blurUserid(){
        if(this.userid.trim().length === 0){
          return Toast("账号不能为空！");
        }
      },
      blurPassword(){
        if(this.password.trim().length === 0){
            return Toast("密码不能为空！");
        }
      }
  },
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
  /* @import '../../../static/css/common.css'; */
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
