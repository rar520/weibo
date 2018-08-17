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

          // var that = this;
          // $.ajax({
          //   url:'http://192.168.0.108:8080/check',
          //   type:'post',
          //   data : {userid : this.userid,password : this.password},
          //   dataType:'json',
          //   xhrField:{
          //     withCredenttials:true   //前端设置是否带cookie
          //   },
          //   crossDomain:true,
          //   success:function(goods){
          //     console.log(goods);
          //   },
          //   error:function(){
          //     console.log("出错了！");
          //   }
          // })

          // let self = this;
          // this.$axios.post('http://192.168.0.108:8080/check', {
          //   'userid':this.userid.trim(),'password':this.password.trim()
          // }, {
          //     headers: {
          //       "Content-Type":"application/json;charset=utf-8"
          //     },
          //     withCredentials : true
          // }).then(function(response) {
          //     // 这里是处理正确的回调
          //     console.log(response.body);
          // }).catch( function(response) {
          //     // 这里是处理错误的回调
          //     console.log(response.status);
          // });
          
          //  this.$http.post('192.168.0.108:8080/check',{'userid':this.userid.trim(),'password':this.password.trim()})
          //   .then(function(result){
          //       // console.log(result.body);
          //       if(result.body.status == 1){
          //         console.log("登陆成功!");
          //       }
          //       else{
          //         console.log(result.body.status);
          //         return Toast("账号或密码错误！");
          //       }
          //   })
        
          // this.$axios({
          //   method:'post',
          //   url:'http://192.168.0.108:8080/check',
          //   data:{
          //     userid:this.userid.trim(),
          //     password:this.password.trim()
          //   }
          // }).then((result)=>{
          //   if(result.body.status == 1){
          //       console.log("登陆成功!");
          //     }
          //     else{
          //       console.log(result.body.status);
          //       return Toast("账号或密码错误！");
          //     }
          // })
          //把帐户名和密码 发送给后台

          this.$http.post('http://192.168.0.108:8080/check',{
            'userid':this.userid,'password':this.password
          })
          .then(function (result) {
            console.log(result.body.status);
          })
          .catch(function (error) {
            console.log("error");
          });


            // this.$http.post("/api/check",{
            //   params:{}
            // })
            // .then((result)=>{
            //   console.log(result.data);
            // }).catch((error)=>{
            //   console.log(error);
            // });
        }
      }
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
