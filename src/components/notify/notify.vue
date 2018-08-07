<template>
    <div style="padding-top:8vh;">
      <div class="header">
        <p>通知</p>
      </div>
      <div class="content">
        <ul>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="/personal"><span>小天鹅-</span></router-link>评论了你的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="/personal"><span>小天鹅-</span></router-link>评论了<router-link to="/personal"><span>若水</span></router-link>的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="personal"><span>小天鹅-</span></router-link>等9人点赞了你</div>
                <div><img src="../../../static/img/zan.png"></div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
             </router-link>
          </li>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="/personal"><span>小天鹅-</span></router-link>评论了你的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
             </router-link>
          </li>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="/personal"><span>小天鹅-</span></router-link>评论了<router-link to="/personal"><span>若水</span></router-link>的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/home/content">
              <div class="up">
                <div><router-link to="/personal"><img src="../../../static/img/imgone.jpg"></router-link></div>
                <div><router-link to="/personal"><span>小天鹅-</span></router-link>等9人点赞了你</div>
                <div><img src="../../../static/img/zan.png"></div>
              </div>
              <div class="down">
                <span>7-13</span>
                <span class="mui-icon-extra mui-icon-extra-like"></span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <div class="footer">
        <ul>
          <li>
            <router-link to="/home">
              <span class="mui-icon mui-icon-home"></span>
              <p>微博</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-email"></span>
              <p>消息</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-plusempty" style="font-size:40px; background-color:#ff8100;color:white;"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <span class="mui-icon mui-icon-search"></span>
              <p>发现</p>
            </router-link>
          </li>
          <li>
            <router-link to="/personal">
              <span class="mui-icon mui-icon-person"></span>
              <p>我</p>
            </router-link>
          </li>
        </ul>
      </div> -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-mr" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/notify">
          <span class="mui-icon mui-icon-email-filled">
            <span class="mui-badge" id="badge">9</span>
          </span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item-pb" to="/publish">
          <span class="mui-icon mui-icon-plusempty"></span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/search">
          <span class="mui-icon mui-icon-search">
          </span>
          <span class="mui-tab-label">发现</span>
        </router-link>
        <router-link class="mui-tab-item-mr" to="/personal">
          <span class="mui-icon mui-icon-person"></span>
          <span class="mui-tab-label">我</span>
        </router-link>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'notify',
  data () {
    return {
      showTime:''
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index:99;
  background-color: white;
  border-bottom: 1px gray solid;
}
.header p{
  color: black;
  text-align: center;
  line-height: 8vh;
}
.content{
  width: 100%;
}
.content ul li{
  height:16vh;
  margin-top: 2vh;
}
.content ul li .up{
  height: 10vh;
  position:relative;
}
.content ul li .up div:nth-child(1){
  width: 55px;
  height: 55px;
  position: absolute;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
}
.content ul li .up div:nth-child(1) img{
  width: 55px;
  height: 55px;
}
.content ul li .up div:nth-child(2){
  height: 100%;
  position: absolute;
  left: 20%;
  right:20%;
}
.content ul li .up div:nth-child(2) span{
  color:#0941f7
}
.content ul li .up div:nth-child(3){
  width: 20%;
  height: 10vh;
  position: absolute;
  right: 0;
}
.content ul li .up div:nth-child(3) img{
  width: 90%;
  height: 10vh;
}
.content ul li .down{
  height: 6vh;
  position:relative;
  border-bottom: 1px solid gray;

}
.content ul li .down span:nth-child(1){
  position:absolute;
  left:25%;
  bottom: 2vh;
}
.content ul li .down span:nth-child(2){
  position:absolute;
  right:5%;
  bottom: 2vh;
  color:gray;
}
.content ul li .down span:nth-child(2).hover{
  color:yellow;
}
// .footer{
//   width:100%;
//   height:8vh;
//   position: fixed;
//   bottom: 0;
//   background-color: white;
//   padding-top:1vh;
// }
// .footer ul{
//   display: flex;
//   justify-content: space-between;
// }
// .footer ul li{
//   width: 20%;
//   height:8vh;
// }
.mui-bar {
  background-color: #fafafa;
  height: 50px;
  bottom: -1px;
}
.mui-bar-tab .mui-tab-item-mr.router-link-active {
    color: #2b2b2b;
}
.mui-bar-tab .mui-tab-item-mr {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #939393;
}
.mui-bar-tab .mui-tab-item-pb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    background: #ff8200;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>