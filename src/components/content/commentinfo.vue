<template>
  <div class="commentinfo-container">
    <!-- 头部header区域 -->
    <mt-header title="查看总回复" fixed>
      <mt-button icon="back" slot="left" @click="goback"></mt-button>
    </mt-header>
    <!-- 头部header区域 -->
    <!-- 评论回复详情 -->
    <div class="commentself" v-for="(item,index) in onecommentdata" :key="index">
      <div class="commentself-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="commentself-user">
        <h3>{{item.comemntnick_name}}</h3>
        <span>{{item.comment_date | dataFormat}}</span>
      </div>
    </div>
    <div class="commentself-content" v-for="(item,index) in onecommentdata" :key="index">
      <p><span>{{item.comemntnick_name}}</span>:{{item.comment_content}}</p>
      <a @click="goback">查看原微博</a>
    </div>
    <!-- 评论回复详情 -->
    <!-- 评论的评论列表区域 -->
    <div class="comment-commentlist" v-for="(item,index) in commentsublist" :key="index">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>{{item.commentsnick_name}}</h3>
        <span>{{item.comments_date | dataFormat}}</span>
        <p>{{item.comments_content}}</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like" @click="postcommentslike(item.user_id,item.comment_id),select(item)" :class="{'actived' : item.selected}">{{item.likecount}}</span>
      </div>
    </div>
    <!-- 评论的评论列表区域 -->
    <!-- 底部回复评论 -->
      <div class="footer-wrap">
        <input placeholder="回复评论" type="text" v-model="commentsdata">
        <input type="button" value="发送" @click="postCommentsMethod">
      </div>
    <!-- 底部回复评论 -->
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
        commentId : this.$route.params.id,
        //保存评论下的评论列表
        commentsublist : [],
        //显示评论列表上面的内容commentsublist
        onecommentdata : [],
        //保存回复评论的数据
        commentsdata : ''
    }
  },
  created () {
    this.getContentSubAllInfo();
  },
  methods : {
    goback() {
      //这里的$router相当于history
      this.$router.go(-1)
    },
    getContentSubAllInfo () {
      this.$http.get('comments/show?showid='+this.commentId)
      .then(result => {
        if(result.body.status==1) {
          this.commentsublist=result.body.object;
          console.log(this.commentsublist)
          this.onecommentdata=this.commentsublist[0].list1;
          console.log(this.onecommentdata)
        }
      })
    },
    //发送表单的内容
    postCommentsMethod () {
      if(this.commentsdata.trim().length==0) {
        return Toast('回复评论不能为空!')
      }
      this.$http.post('user/send/comments?commentid='+this.commentId,{
        comments_content : this.commentsdata.trim()
      })
      .then(result => {
        if(result.body.status==1) {
          //评论评论者的信息
           var cmts={
            head_image : '评论用户的头像',
            commentsnick_name : "评论用户的昵称",
             comments_content : this.commentsdata.trim(),
             comments_date : Date().now,
             likecount : 0
           }
          this.commentsublist.unshift(cmts)
          this.commentsdata=''
        }
      })
    },
    //评论的评论点赞
       postcommentslike(userid,commentid) {
       console.log(userid)
       console.log(commentid)
      this.$http.post('user/praise/comments',{
        userid : userid,
        commentid : commentid
      }).then(result => {
        if(result.body.status==1) {
          console.log("评论的评论的点赞")
        }
      })
    },
    select (item) {
      console.log(item)
      if(!item.selected) {
         item.selected=!item.selected
         item.likecount++
      }
      else {
        item.selected=!item.selected
        item.likecount--
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.commentinfo-container {
  padding-top:60px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
// 头部的header区域
.mint-header.is-fixed {
  z-index:99
}
.mint-header {
  background-color: #fafafa;
  color: #929292;
  height:60px;
  align-content: center;
  font-size: 18px;
  color: #2b2b2b;
}
.mint-header .mint-button {
  font-size:29px;
}
// 中间内容的区域
  .commentself {
    padding:5px 5px;
    display:flex;
    justify-content: space-between;
    .commentself-image {
     width: 55px;
     height: 55px;
     border-radius: 50%;
      img {
      font-size: 0;
      line-height: 0;
      width: 100%;
      height: 100%;
      }
    }
    .commentself-user {
      width: 84%;
      h3 {
        font-size:16px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      span {
        font-size:15px;
        color: #929292;
      }
    }
  }
  .commentself-content {
    padding-top:10px;
    padding-left:16%;
    padding-bottom:20px;
    p {
      font-size:18px;
      margin-bottom: 10px;
    }
    span {
      color: #5681b1;
    }
    a {
      color: #5681b1;
      font-size:14px;
    }
  }
// 评论的评论列表
.comment-commentlist {
    padding:5px 5px;
    display:flex;
    justify-content: space-between;
    background-color: #f6f6f6;
    .comment-commentlist-image {
     width: 55px;
     height: 55px;
     border-radius: 50%;
      img {
      font-size: 0;
      line-height: 0;
      width: 100%;
      height: 100%;
      }
    }
    .comment-commentlist-user {
      width: 77%;
      border-bottom: 1px solid #ccc;
      h3 {
        font-size:14px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      span {
        font-size:14px;
        color: #929292;
      }
      p {
        margin: 10px 0;
        line-height: 20px;
      }
    }
  }
//底部区域的样式
.footer-wrap {
  width:100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #f6f6f6;
  padding: 5px;
  display: flex;
  input {
    border-radius: 10px;
    margin-left: 8px;
  }
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
      color: #929292;
  }
  .actived {
  color:#ff8200;
 }
</style>



