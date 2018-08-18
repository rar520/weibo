<template>
    <div>
         <ul class="wb">
            <router-link class="mui-card" v-for="item in weibodata" :key="item.WeiBo_id" :to="'/home/content/'+item.WeiBo_id" tag="div">
                    <div class="mui-card-header mui-card-media">
                        <div class="touxiang-image">
                            <img src="../../../static/img/header.png" alt="萌妹子">
                        </div>
                        <div class="mui-media-body">
                            <h4>{{item.nick_name}}</h4>
                            <p>{{item.releasetime}}<span class="device">来自微博weibo.com</span></p >
                        </div>
                    </div>
                    <div class="mui-card-content">
                        {{item.wei_content}}
                    </div>
                    <div class="mui-card-footer">
                        <router-link to="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">{{item.commentCount}}</span></router-link>
                        <router-link to="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like" @click="toggleClass" v-bind:class="{'actived' : likeStatus,'noactived' : !likeStatus}">{{item.likeCount}}</span></router-link>
                    </div>
            </router-link>
         </ul>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            likeStatus : false,
            weibodata : [],
        }
    },
    methods:{
        getAttentionData() {
                this.$http.get('myweiboonid').then(result=> {
                    if(result.body.status==1){
                        this.weibodata=result.body.object
                    }
                    console.log(result.body)
                        })
            },
//点赞的变化处理
        toggleClass() {
                this.likeStatus=!this.likeStatus

         }
        },

    created () {
                this.getAttentionData();
            }
    
    })
</script>

<style scoped>
    /* .content .wb li{
        width:100%;
        border-top:#999 1px solid;
        padding-bottom:10px;
    }
    .wb .massage{
        height:15vh;
        padding-top: 2vh;
    }
    .wb .massage img{
       float:left;
       width:21%;
       height:11vh;
       margin-right: 5%;
    }
    .wb .massage p{
        line-height:0px;
        padding-top:3vh;
    }
    .wb .massage .p1{
        color:#000;
        font-size:18px;
    }
    .wb .massage .p2{
        font-size:16px;
        line-height: 0;
    }
    .wb .cont{
        color:#000;
        font-size:18px;
    }
    .wb .pinlun{
        border-top:#999 1px solid;
        padding-top: 1vh;
    }
    .wb .mui-icon-extra{
        color:#999;
        display: inline-block;
        width:50%;
        text-align: center;
        font-size: 20px;
    }
    .wb .pin{
        float: left;
    }
    .wb .dian{
        float: right;
    } */
    .mui-card{
/* position: absolute; */
        margin-top: 30px;
        margin-left: 0;
        margin-right:0px;
        }
.mui-card-header {
        height: 60px;
        }
.mui-card-header .touxiang-image {
        border-radius: 50%;
        overflow: hidden;
        float: left;
        width: 40px;
        height: 40px;
        }
.mui-card-header img {
        font-size: 0;
        line-height: 0;
        width: 100%;
        height: 100%;
        }
.mui-media-body {
        font-weight: bold;
        position: relative;
        }
.mui-media-body h4{
        position: absolute;
        top: 1px;
        }
.mui-media-body p{
        position: absolute;
        width: 600px;
        top: 20px;
        height: 20px;
        left: -2%;
        font-size:14px;
        }
.device {
        margin-left:6px;
        }
.mui-card-content {
        font-size:16px;
        margin-left: 20px;
        }
.mui-card-link {
        color:#636363;
        }
.mui-icon-mr {
        font-family: Muiicons;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        }
.mui-icon-extra-mr {
        font-family: MuiiconSpread;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        }
</style>