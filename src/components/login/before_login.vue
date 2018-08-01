<template>
    <div>
        <header>
            <h1>我</h1>
            <a link="#">设置</a>
        </header>
        <main>
            <div class="content_bg">
                <img src="../../../static/img/origin_head.png">
            </div>
            <p>登陆后，你的微博、相册、个人资料<br/>会展示在这里，显示给别人</p>
            <div class="login_register">
                <div class="register">
                    <router-link to="/register" class="register_link">注册</router-link>
                </div>
                <div class="login">
                    <router-link to="/login" class="login_link">登录</router-link>
                </div>
                <!-- <input type="button" value="注册"/>
                <input type="button" value="登录"/> -->
            </div>
        </main>
        <footer>
            <ul class="clearfix">
                <li>
                    <span class="mui-icon mui-icon-home"></span>
                    <p>微博</p>
                </li>
                <li>
                    <span class="mui-icon mui-icon-email"></span>
                    <p>消息</p>
                </li>
                <li class="publish">
                    <router-link to="/publish">
                        <span class="mui-icon mui-icon-plusempty"></span>
                    </router-link>
                </li>
                <li>
                    <span class="mui-icon mui-icon-search"></span>
                    <p>发现</p>
                </li>
                <li>
                    <span class="mui-icon mui-icon-person"></span>
                    <p>我</p>
                </li>
            </ul>
                
        </footer>
    </div>
</template>

<script>
export default {
   name: 'before_login',
   data(){
       return{

       }
   }
}
</script>

<style scoped>
@import '../../../static/css/common.css';
div:nth-of-type(1){
    background-color:#efe8e8;
    height:100vh;
}
header{
    width:100%;
    height:8vh;
    padding-top:4vh;
    position:relative;
}
header h1{
    font-size:18px;
    line-height:4vh;
}
header a{
    font-size:18px;
    position:absolute;
    top:4vh;
    left:85%;
}
main{
    padding-bottom:8vh;
}
main .content_bg{
    height:35vh;
    background-image:url("../../../static/img/bg.jpg");
    background-size:100%;
    background-position:center;
    position:relative;
}
main img{
    width:18%;
    height:10vh;
    position:absolute;
    top:17vh;
    left:50%;
    margin-top:-5vh;
    margin-left:-9%;
}
main p{
    font-size:20px;
    color:#858282;
    text-align:center;
    margin-top:10vh;
    margin-bottom:10vh;
    line-height: 5vh;
}
main .login_register{
    width:73%;
    margin:0 auto;
    display:flex;
    margin-bottom:20px;
}
main .login_register div{
    width:45%;
    height:7vh;
    background-color:#efe8e8;
    border:1px #c9c9c9 solid;
    border-radius:4px;
    font-size:20px;
    margin:0 auto;
}
main .login_register div:nth-of-type(1){
    margin-right:10%;
}
main .login_register div:nth-of-type(1) .register_link{
    line-height:7vh;
    color:#fe8101;
    margin:0 auto;
}
main .login_register div:nth-of-type(2) .login_link{
    line-height:7vh;
    color:#676464;
    margin:0 auto;
}
footer{
    height:9vh;
    border-top:1px #9b9696 solid;
}
footer ul li{
    width:20%;
    float:left;
}
footer ul li span{
    font-size:38px;
}
footer ul li.publish span{
    margin-top:1vh;
    width:80%;
    height:7vh;
    background-color:#fe8101;
    display:inline-block;
    border-radius:2px;
    font-size:48px;
    color:#fff;
}
footer ul li p{
    color:#474747;
}
</style>
