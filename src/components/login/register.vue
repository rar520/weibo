<template>
    <div>
        <router-link to="before_login">
            <span class="mui-icon mui-icon-closeempty"></span>
        </router-link>
        <!-- <div class="origin_head">
            <span class="mui-icon mui-icon-contact"></span>
        </div> -->
        <div class="head_img">
             <img id="imghead" src="../../../static/img/origin_head.png" width="55px" height="55px" /> 
        </div>
        <form id="form1" method="post" action="http://192.168.0.108:8080/picsend" enctype="mulitipart/form-data">
            <!-- //图片上传 -->
            <div class="file_div">选择头像
                <input type="file" name="mulitipartFile" id="file" value="选择头像" accept="image/*" />
            </div>
            <input type="submit" />
        </form>
        <form action=''>
            <input type="text" placeholder="请输入账号" v-model="nickname" @blur="blurNickName" v-focus/>
            <input type="password" placeholder="请输入密码" v-model="password" @blur="blurPassword" />
            <input type="password" placeholder="请确认密码" v-model="pass_define" @blur="blurPassDefine" />
            <!-- <router-link to="/login"> -->
                <input type="submit" id="register" value="注册" @click="postRegister($event)" />
            <!-- </router-link> -->
        </form>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default{
    name: 'register',
    data(){
        return{
            nickname:'',
            password:'',
            pass_define:'',
            headimage:''
        }
    },
    methods:{
        // router_next(){
        //     this.$router.push({
        //         path:'before_login',
        //         name:'before_login',
        //         params:{

        //         }
        //     })
        // },
        postRegister(event){
            event.preventDefault();
            let formData = new FormData();
            formData.append('nickname', this.nickname);
            formData.append('password', this.password);
            formData.append('headimage', this.headimage);
 
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            if(this.nickname.trim().length === 0 || this.password.trim().length ===0 ){
                return Toast("账户名密码不能为空！");
            }
            else{
                this.$http.post('doregist', formData,config).then(function (result) {
                if(result.body.status == 1){
                    // this.$router.go("/login");
                    console.log(result.body.status);
                    var returnObj = result.body.object;
                    console.log(returnObj);
                    alert("你的账号是：" + returnObj);
                }
              })
            }
        },
        blurNickName(){
            var re = /^\S{1,7}$/;
            if(this.nickname.trim().length === 0){
                return Toast("账户名不能为空！");
            }else if(this.nickname.match(re) == null){
                this.nickname = "";
                return Toast("请输入正确账户名格式！");
            } 
        },
        blurPassword(){
            var re = /^[a-zA-Z0-9_]{6,10}$/;
            if(this.password.trim().length === 0){
                return Toast("密码不能为空！");
            }else if(this.password.match(re) == null){
                this.password = "";
                return Toast("请输入6-10为数字字母下划线密码！");
            }
        },
        blurPassDefine(){
            if(this.password != this.pass_define){
                this.pass_define = "";
                return Toast("确认密码不符，请重新输入！");
            }
        },
        imgChange() {
                //获取点击的文本框
                // var file =document.getElementById("file");
                // var imgUrl =window.URL.createObjectURL(file.files[0]);
                // var img =document.getElementById('imghead');
                // img.setAttribute('src',imgUrl); // 修改img标签src属性值
                // this.headimage = imgUrl;
                var  file_obj = document.getElementById("file");
                var img =document.getElementById('imghead');
                var file = file_obj.files[0];
                if(undefined == file){
                    return ;
                }
                var r = new FileReader(); 
                r.readAsDataURL(file);      // result 为 DataURL,DataURL 是带头信息(/image) 的 base64(可能是) 编码的字符串
                r.onload = function(e) {
                    var base64 = e.target.result;
                    console.log(base64);
                    img.setAttribute('src',base64);
                    this.headimage = base64;
                }
        }
    },
    directives:{
        'focus':{
            inserted(el){
				el.focus();
			}
        }
    }
}
</script>
<style scoped>
div{
    padding-top:20vh;
}
span:nth-of-type(1){
    font-size: 65px;
    position: absolute;
    top: 6vh;
    left: 4%;
}
/* .origin_head{
    width:55px;
    height:55px;
    margin:0 auto;
    position:relative;
} */
/* .origin_head span{
    font-size:70px;
    position:absolute;
    top:0;
    left:0;
} */
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
  div.head_img{
      padding-top:0;
      margin:0 auto;
      width:65px;
      height:65px;
      border-radius:50%;
      position:relative;
      margin-bottom:6vh;
  }
  #imghead{
      width:65px;
      height:65px;
      border-radius:50%;
      position:absolute;
      left:0;
      top:0;
  }
  div.file_div{
    display: inline-block;
    position: relative;
    padding: 0px 5px;
    overflow: hidden;
    color: #fff;
    background-color: #ffd8af;
    width: 82px;
    height: 29px;
    font-size: 15px;
    text-align: center;
    line-height: 29px;
    margin: 0 auto;
    border-radius: 6px;
    left: 40%;
    top: -4vh;
  }
  input#file{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    background-color: transparent;
    filter:alpha(opacity=0);
    -moz-opacity:0;
    -khtml-opacity: 0;
    opacity: 0;
  }
  input:nth-of-type(4){
    margin-bottom:10vh;
  }
  input#register{
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
  input#register:hover{
    background-color:#fe8101;
    border:0;
  }
</style>
