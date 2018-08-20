<template>
  <div class="like-container">
   <div class="like-list" v-for="(item,index) in likeList" :key="index">
     <div class="like-list-image">
       <img :src="item.headImage" alt="点赞用户1">
     </div>
     <div class="like-list-content">
       <div class="like-list-user">
         <h3>{{item.nickName}}</h3>
         <p>{{item.introduce}}</p>
       </div>
       <div class="icon">
         <img src="../../../static/img/dianzan.jpg" alt="赞"><span>赞</span>
       </div>
     </div>
   </div>
      <!-- <div class="like-list">
     <div class="like-list-image">
       <img src="../../../static/img/touxiang1.jpg" alt="点赞用户1">
     </div>
     <div class="like-list-content">
       <div class="like-list-user">
         <h3>小小白</h3>
         <p>一个前端的初学者</p>
       </div>
       <div class="icon">
         <img src="../../../static/img/dianzan.jpg" alt="赞"><span>赞</span>
       </div>
     </div>
   </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return{
      likeList : [],
      //用来保存点赞的状态
      likeStatus : false,
      // 用来保存点击微博的id值
      dataId : this.$route.params.id
    }
  },
  methods : {
    //获取点赞列表
    getLikeList () {
      this.$http.get('user/praise/selectpraise?weiboid='+this.dataId)
      .then(result => {
        if(result.body.status==1) {
          this.likeList=result.body.obj;
        }
      })
    },
      //替换组件时的样式变化
      toggleClass() {
      this.likeStatus=!this.likeStatus
    }
  },
  created () {
    this.getLikeList();
  }
}
</script>
<style lang="scss" scoped>
.like-container {
  .like-list {
    padding-top:10px;
    padding-left: 5px;
    padding-right: 5px;
    overflow: hidden;
    .like-list-image {
      width: 55px;
      height: 55px;
      float: left;
      img {
        width:100%;
        height: 100%;
      }
    }
    .like-list-content {
      width:83%;
      float: left;
      display:flex;
      justify-content: space-between;
      align-items:center;
      border-bottom:1px solid #949494;
      line-height: 20px;
      .like-list-user {
        margin-left: 10px;
          h3 {
          font-size:16px;
          color: #292929;
          font-weight: bold;
          margin-bottom: 10px;
          }
          p {
            font-size:14px;
            color:#939393;
            margin-bottom: 10px;
          }
      }
      .icon {
        display:flex;
        align-items:center;
        span{
          margin-left:5px;
          font-size:19px;
        }
      }
    }
  }
}
</style>


