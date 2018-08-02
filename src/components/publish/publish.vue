<template>
    <div>
        <header>
            <span>返回</span>
            <span>正在编辑</span>
            <span>soda</span>
            <div>
                发送
            </div>
        </header>
        <main>
            <textarea name="" id="" placeholder="分享我的故事......"></textarea>
            <div class="input">
                <div class="export">
                    <ul class="clearfix">
                        <li>
                            <span class="mui-icon mui-icon-image"></span>
                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-at"></span>
                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-heart"></span>
                        </li>
                        <li>
                            <span class="mui-icon mui-icon-plusempty"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        
    </div>
</template>

<script>
export default{
    name: 'publish',
    data(){
        return{

        }
    }
}
</script>

<style scpoed>
 /* @import '../../../static/css/common.css'; */
 header{
    width:100%;
    height:8vh;
    padding-top:4vh;
    position:relative;
    background-color:#f9f9f9;
    border-bottom:1px #d0d0d0 solid;
}
 header span:nth-of-type(1){
    font-size:18px;
    position:absolute;
    top:4vh;
    left:5%;
 }
 header span:nth-of-type(2){
    font-size:18px;
    position:absolute;
    top:2vh;
    left:40%;
 }
 header span:nth-of-type(3){
    font-size: 20px;
    position: absolute;
    top: 5vh;
    left: 43%;
    color: #848080;
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
 }
 main .input .export ul li{
    width:25%;
    float:left;
    padding-top:2vh;
 }
 main .input .export ul li span{
    font-size:25px;
 }
 main .input .export ul li:nth-of-type(4) span{
    border-radius:50%;
    border:1px #949494 solid;
 }
</style>