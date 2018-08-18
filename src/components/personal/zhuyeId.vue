<template>
    <div>
        <ul class="zy">
                <li>
                    <h3>基本资料</h3>
                </li>
                <li>
                    <h5>信息</h5>
                    <span>{{user_sex}}</span>
                    <span>{{home}}</span>
                </li>
                <li>
                    <h5>公司</h5>
                    <span>{{conpany}}</span>
                </li>
                <li>
                    <h5>生日</h5>
                    <span>{{birth_date}}</span>
                </li>
                <li class="time">
                    <h5>注册时间</h5>
                    <span>{{registDate}}</span>
                </li>
                <!-- <li>
                    <router-link to="/data" tag="a"><h4>更新基本资料，方便大家了解你</h4></router-link>
                </li> -->
            </ul>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            user_sex:'',
            home:'',
            conpany:'',
            birth_date:'',
            registDate:"",
        }
    },
    methods:{
        getInfor(){
            this.$http.get('center/center?user=1').then(result=>{
                if(result.body.status==1){
                    var obj = result.body.object;
                    this.user_sex=obj.user_sex;
                    this.home=obj.home;
                    this.conpany=obj.conpany;
                    this.birth_date=obj.birth_date;
                    this.registDate=obj.registDate;
                }
            })
        }
    },
    created(){
        this.getInfor();
    }
})
</script>
<style scoped>
    .zy{
        margin-left: 5%;
        margin-right: 2%;
    }
    .zy li{
        width:100%;
        border-top:1px #999 solid;
        padding-top:3vh;
        padding-bottom:3vh;
    }
    .zy h3,.zy h5{
        display:inline-block;
        line-height:0;
    }
    .zy h3{
        color:#4a4a4a;
        font-size:22px;
        padding-right:60%;
    }
    .zy h5{
        color:#4a4a4a;
        font-size:20px;
        padding-right:25%;
    }
    .zy span{
        color:#4a4a4a;
        font-size:19px;
        padding-right:2%;
    }
    .zy .time h5{
        padding-right:15%;
    }
    .zy h4{
        text-align: center;
        color:#7084a3;
        font-size:20px;
    }
</style>