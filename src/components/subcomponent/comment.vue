<template>
  <div class="comment-container">
    <div class="comment-list" v-for="(item,index) in commentList" :key="index">
      <div class="comment-list-image">
        <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
      </div>
      <div class="comment-list-body">
        <h3>{{item.commentnick_name}}</h3>
        <p>{{item.comment_content}}</p>
        <router-link :to="'/home/content/commentinfo/'+item.comment_id" class="comment-list-body-content" tag="div">
          <div v-for="(item,index) in commentSubList" :key="index">
            <p><span>{{item.commentsnick_name}}:</span>{{item.comments_content}}</p>
          </div>
          <p><span>查看总回复&nbsp;></span></p>
        </router-link>
        <div class="comment-list-time">
          <span>{{item.comment_date | dataFormat}}</span>
          <div class="comment-list-icon">
            <span class="mui-icon-mr mui-icon-redo"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-comment"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-like" @click="postcommentlike(item.user_id,item.comment_id),select(item)" :class="{'actived' : item.selected}">{{item.likecount}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部tabbar区域 -->
    <div class="mui-card-footer">
      <input type="text" v-model="postcommentdata" placeholder="请输入评论内容">
      <input type="button" value="发表评论" @click="postcommentMethod">
    </div>
    <!-- 底部tabbar区域 -->
  </div>
</template>
<script>
// import '../../../static/mui/css/mui.css'
// import '../../../static/mui/css/icons-extra.css'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
        //评论的点赞状态
        likeStatus : false,
       // 用来保存点击微博的id值
        dataId : this.$route.params.id,
        //保存一条微博的信息
        weibocontent : {},
        //保存评论的所有信息
        commentList : [],
        //保存评论的评论信息
        commentSubList :[],
        //用来保存点赞的状态
        likeStatus : false,
        //保存表单提交的数据
        postcommentdata : ''
    }
  },
  methods : {
    showComment() {
      this.$http.get('comment/show?weiboid='+this.dataId).then(result => {
        if(result.body.status==1) {
          //获取评论列表的每一项得到的是数组
          this.commentList=result.body.object;
          // console.log(this.commentList)
          //遍历得到的数组的每一项list1,又得到list1数组
          this.commentList.forEach(element => {
            this.commentSubList=element.list1
          });
        }
      })
    },
      //替换组件时的样式变化
      toggleClass() {
      this.likeStatus=!this.likeStatus
    },
    //发送表单的内容
    postcommentMethod () {
      if(this.postcommentdata.trim().length==0) {
        return Toast('评论的内容不能为空!')
      }
      this.$http.post('user/send/comment?weiboid='+this.dataId,{
        comment_content : this.postcommentdata.trim()
      })
      .then(result => {
        if(result.body.status==1) {
          //发布评论者的信息
           var cmt={
            head_image : '登录用户的头像',
            commentnick_name : "登录用户的昵称",
             comment_content : this.postcommentdata.trim(),
             comment_date : Date().now,
             likecount : 0
           }
          //发布评论者的信息下的评论
          var cmts=[]
          this.commentList.unshift(cmt)
          this.commentSubList=cmts
          this.postcommentdata=''
        }
        console.log(result.body)
      })
    },
    //评论点赞
    postcommentlike(userid,commentid) {
      console.log(userid+"yonghu")
      console.log(commentid+"pinglun")
      this.$http.post('user/praise/comment',{
        userid : userid,
        commentid : commentid
      }).then(result => {
        if(result.body.status==1) {
          console.log("评论点赞++")
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
  },
  created () {
    this.showComment();
  }
}
</script>
<style lang="scss" scoped>
.comment-list {
  padding-top: 10px;
  overflow: hidden;
  .comment-list-image {
      border-radius: 50%;
      float: left;
      width: 55px;
      height: 55px;
    img {
      font-size: 0;
      line-height: 0;
      width: 100%;
      height: 100%;
    }
  }
  .comment-list-body {
    float:right;
    width: 85%;
      h3 {
        font-size: 13px;
        font-weight: bold;
        color:#858585;
        margin-bottom: 10px;
      }
      p {
        font-size: 15px;
        color: #000;
        margin-bottom: 10px;
        line-height: 22px;
      }
      .comment-list-body-content {
        background-color: #efefef;
        margin-right: 10px;
        padding: 5px;
        p {
          font-size: 13px;
          color: #000;
          span {
            color: #5f8fb7;
          }
        }
      }
  }
}
// 评论时间图标区域
  .comment-list-time {
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #949494;
    padding: 5px 0px;
    span {
      font-size: 13px;
      color: #949494;
    }
    .comment-list-icon {
      width: 32%;
      margin-right: 10px;
      color:#636363;
      display:flex;
      justify-content:space-between;
      align-items: center;
      .noactived {
        color: #636363;
      }
      .actived {
      color:#ff8200;
    }
      .mui-icon-mr {
        font-family: Muiicons;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
    }
    .mui-icon-extra-mr {
        font-family: MuiiconSpread;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
  }
  }
}
// 底部区域的样式
  .mui-card-footer {
      width:100%;
      background: #efefef;
      position:fixed;
      bottom:-1px;
      justify-content: space-around;
      z-index: 99;
      input {
        border-radius: 10px;
        margin-bottom: 0;
        margin-left: 10px;
      }
}
</style>


