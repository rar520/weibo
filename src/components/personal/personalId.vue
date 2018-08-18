<template>
    <div class="follow">
        <div class="header clearfix">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <a @click="goback"><span class="me">我</span></a>
            <div class="guanzhu" id="guanzhu" @click="toggleguanzhu">{{msg}}</div>
            <img src="../../../static/img/header.png">
            <p class="name">{{userInfor.nickName}}</p>
            <router-link to="follow" tag="a"><p class="foc">关注<span>{{fOllow}}</span></p></router-link>
            <router-link to="fans" tag="a"><p class="fans">粉丝<span>{{fAns}}</span></p></router-link>
            <p class="introduce"></p>
        </div>
        <div class="title clearfix">
            <span class="span1" v-for="(item,index) in list" :key="index" :class="{actived:isactived==index}" @click="isactived=index,toggle('tab'+(index+1))">{{item.title}}</span>
        </div>
        <div class="content">
            <component :is="currentView" keep-alive></component>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Zhuye from './zhuyeId.vue'
import Weibo from './weiboId.vue'
export default Vue.extend({
    data () {
        return {
            list : [
                {title: "主页"},
                {title: "微博"}
            ],
            isactived:0,
            //用来保存组件的name
            currentView : 'tab1',

            nickName:'素团子',
            fAns:'2',
            fOllow:'2',
            userInfor:{},
            flag : false,
            msg:'关注',
            userid:this.$route.params.id,
            
        }
    },
    methods : {
        goback(){
            this.$router.go(-1)
        },
        toggle(arg) {
            this.currentView=arg;
        },
        getInto(){
            this.$http.get('center/center?user=this.userid').then(result=>{
                if(result.body.status==1){
                   //var obj = reslut.body.object; 
                   this.userInfor = result.body.object;
                   //this.introduce = obj.introduce;
                }
            })
        },
        getFans(){
            this.$http.get('focus/fanscount').then(result=>{
                if(result.body.status==1){
                    this.fAns=reslut.body.object;
                }
            })
        },
        getFollow(){
            this.$http.get('focus/focuscount').then(result=>{
                if(result.body.status==1){
                    this.fOllow=reslut.body.object;
        }
        })
        },
        toggleguanzhu () {
            if(this.flag==false){
                this.msg="已关注";
                this.flag=true;
                this.$http.post('user/focus/add',{user_id:this.userid}).then(function(res){
                    if(res.body.status==1){
                        alert("成功关注该用户")
                    }
                })
            }else{
                this.msg="关注";
                this.flag=false;
                this.$http.post('user/focus/delete',{user_id:this.userid}).then(function(res){
                    if(res.body.status==0){
                        alert("已取消关注")
                    }
                })
            }
            
        }
    },
    created(){
        this.getInto()
        this.getFans();
        this.getFollow();
    },
    components : {
        "tab1" : Zhuye,
        "tab2" : Weibo 
        }
    
})
</script>
<style  scoped>
    .follow{
        width:100%;
    }
    .header{
        width:100%;
        height:35vh;
        background:url(../../../static/img/bjt.png) no-repeat center 0px;
        background-size:cover;
        position:relative;
    }
    .header .mui-icon-arrowleft{
        font-size:35px;
        color:#fff;
    }
    .header .me{
        font-size: 24px;
        color:#fff;
        display: inline-block;
        padding-left:0;
        padding-top:1vh;
    }
    .header img{
        width:21%;
        height:12vh;
        margin: 0 auto;
        display:block;
        margin-top:28px;
    }
    .header .name{
        color:#fff;
        text-align: center;
        font-size: 22px;
    }
    .header .foc,.fans{
        float:left;
        color:#fff;
        font-size:16px;
        text-align: center;
        line-height: 100%;
    }
    .foc span,.fans span{
        color:#fff;
    }
    .header .foc{
        left:35%;
        position:absolute;
    }
    .header .fans{
        position:absolute;
        left:53%;
    }
    .header .introduce{
        color:#fff;
        font-size:17px;
        text-align: center;
        padding-top:3vh;
        margin:0;
    }
    .title{
        width:100%;
        height:6vh;
    }
    .title span{
        display:inline-block;
        width:50%;
        font-size: 24px;
        color:#959595;
        line-height: 6vh;
        text-align: center;
        background-color:#fff;
    }
    .title .span1{
        float:left;
    }
    .title .span2{
        float:right;
    }
    .title .span1:active{
        background-color:#f18c43;
        color:#fff;

    }
    .title .span2:active{
        background-color:#f18c43;
        color:#fff;
    }
    .content{
        margin-left:0%;
        margin-right:0%;
    }
    .guanzhu {
        position: absolute;
        right: 6%;
        top: 6%;
        width: 66px;
        height: 28px;
        text-align: center;
        border: 1px solid #f18c43;
        line-height: 28px;
        color: #f18c43;
    }
</style>
