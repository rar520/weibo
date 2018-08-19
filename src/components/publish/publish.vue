<template>
    <div>
        <header>
            <p>正在编辑</p>
            <p id="nickname"></p>
            <router-link to="/home">
                <span>返回</span>
            </router-link>
            <div @click="postWeiboContent">
                发送
            </div>
        </header>
        <main>
            <textarea placeholder="分享我的故事......" maxlength="160" v-model="weiboContent"></textarea>
            <div class="input">
                <div class="export">
                        <form method="post" action="http://47.106.12.97:80/sagas/user/publish/upload" enctype="multipart/form-data">
                          
                                <input type="file" name="files" id="file"/>
                         
                            <input type="submit" id="submit"/>
                        </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    name: 'publish',
    data(){
        return{
            weiboContent:''
        }
    },
    methods:{
        //发布微博文字内容
        postWeiboContent(){
            if(this.weiboContent.trim().length === 0){
                return Toast("发布内容不能为空！");
            }else{
                this.$http.post("user/publish/insert",{'weiboContent':this.weiboContent})
                .then(function(result){
                    if(result.body.status == 1){
                        console.log("发送成功！");
                        this.$router.push('/home');
                    }
                })
            }
        }
    },
    created(){
        //获取昵称
        this.$http.get('user/publish/nickname').then((result)=>{
            var nickname = document.getElementById('nickname');
            console.log(result.body.object)
            nickname.innerHTML = result.body.object;
        })
    } 
}  
</script>

<style scpoed>
 header{
    width:100%;
    height:8vh;
    position:relative;
    background-color:#f9f9f9;
    border-bottom:1px #d0d0d0 solid;
}
header p:nth-of-type(1){
    line-height:5vh;
    text-align:center;
    font-size:18px;
}
header p:nth-of-type(2){
    text-align:center;
    font-size:20px;
    line-height:2vh;
}
 header span:nth-of-type(1){
    font-size:18px;
    position:absolute;
    top:4vh;
    left:5%;
 }
 header div{
    width: 15%;
    height: 4vh;
    font-size: 16px;
    color: #848080;
    position: absolute;
    top: 3vh;
    left: 80%;
    border: 1px #e5e5e5 solid;
    border-radius: 4px;
    text-align:center;
    line-height: 4vh;
    background-color:#fefefe;
 }
 main textarea{
    width:100%;
    height:50vh;
    padding-top:2vh;
    padding-left:5%;
    border:0;
 }
 main .input .export{
    border-top:1px #e5e5e5 solid;
    height:7vh;
    background-color:#f9f9f9;
    position:relative;
 }
 #submit{
     position:absolute;
     right:5%;
     top:1vh;
 }
</style>