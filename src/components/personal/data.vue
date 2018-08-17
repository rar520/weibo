<template>
    <div class="data">
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <router-link to="/personal" tag="a"><span>返回</span></router-link>
            <h3>编辑资料</h3>
        </div>
        <div class="title1">
            <p>账号信息</p>
        </div>
        <div class="content1">
            <ul>
                <li>
                    <h5>昵称</h5>
                    <input type="text" v-model="nick_name">
                </li>
                <li>
                    <h5>简介</h5>
                    <input type="text" v-model="introduce">
                </li>
                <li class=timer>
                    <h5>注册时间</h5>
                    <input type="text" v-model="registDate">
                </li>
            </ul>
        </div>
        <div class="title2">
            <p>个人信息</p>
        </div>
        <div class="content2">
            <ul>
                <li>
                    <h5>性别</h5>
                    <input type="text" v-model="user_sex">
                </li>
                <li>
                    <h5>生日</h5>
                   <input type="text" v-model="birth_date">
                </li>
                <li class="address">
                    <h5>所在地</h5>
                    <input type="text" v-model="home">
                </li>
                 <li>
                    <h5>公司</h5>
                    <input type="text" v-model="conpany">
                </li>
                 <li>
                    <h5>姓名</h5>
                    <input type="text" v-model="sch_name">
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
            nick_name:"素团子",
            introduce:"我是简介",
            registDate:"1965-2-26",
            user_sex:'女',
            birth_date:'1965-2-1',
            home:'河北邢台',
            conpany:'中国国家京剧院',
            sch_name:'lisusudemimi'
    }
  },
 methods:{
     getInfor(){
         this.$http.post('center/center?user=1',{}).then(result=>{
             if(result.body.status==1){
                var obj = result.body.object;
                this.nick_name = obj.nick_name;
                this.introduce = obj.introduce; 
                this.registDate=obj.registDate;
                this.user_sex=obj.user_sex;
                this.birth_date=obj.birth_date;
                this.home=obj.home;
                this.conpany=obj.conpany;
                this.sch_name=obj.sch_name;    
             }
         })
     },
     postInfor(){
         this.$http.post('user/center/updata?user=1',{'nick_name':this.nick_name,'introduce':this.introduce,'registDate':this.registDate,'user_sex':this.registDate,'birth_date':this.birth_date,'home':this.home,'conpany':this.conpany,'sch_name':this.sch_name}).then(result=>{
             if(result.body.status==1){
                 alert('保存成功');
             }
         })
     }
 },
 created(){
     this.getInfor();
     this.postInfor();
 }
}
</script>

<style scoped>
.data{
    width:100%;
}
.header{
    background-color:#f1edeb;
    height:8vh;
    line-height: 8vh;
}
.header .mui-icon{
    font-size: 32px;
    color:#000;
}
.header span{
    font-size: 22px;
    color:#000;
}
.header h3{
    display: inline-block;
    font-size:24px;
    position:relative;
    left:18%;
}
.title1,.title2{
    padding-top: 5vh;
    padding-bottom:5vh;
    border-top:#d0d0d0 1px solid;
}
.title1 p,.title2 p{
    font-size: 24px;
    margin: 0;
    line-height: 0;
    padding-left:5%;
    color:#ff8200;
}
.content1 li,.content2 li{
    border-top:#d0d0d0 1px solid;
    padding-top:2vh;
    padding-bottom:2vh;
    padding-left:6%;
    line-height: 0;
}
.content1 h5,.content2 h5{
    color:#000;
    font-size:22px;
    display:inline-block;
}
.content1 input,.content2 input{
    font-size:22px;
    padding-left:28%;
    display: inline-block;
    border:none;
    width:70%;
}
.content1 .timer input{
    padding-left:16%;
}
.content2 .address input{
    padding-left:21%;
}
</style>
