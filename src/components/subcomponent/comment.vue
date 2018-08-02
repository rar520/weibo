<template>
  <div class="comment-container">
    <div class="comment-list">
      <div class="comment-list-image">
        <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
      </div>
      <div class="comment-list-body">
        <h3>张欢</h3>
        <p>张欢的评论张欢的评论张欢的评论</p>
        <router-link to="/home/content/commentinfo" class="comment-list-body-content" tag="div">
          <p><span>韩雪小姐姐:</span>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
          <p><span>吴彦祖小哥:</span>哇,你就是西邮吴彦祖啊,久仰大名!!!</p>
          <p><span>共99条回复&nbsp;></span></p>
        </router-link>
        <div class="comment-list-time">
          <span>7-28&nbsp;23:36</span>
          <div class="comment-list-icon">
            <span class="mui-icon-mr mui-icon-redo"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-comment"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-like">176</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-list">
      <div class="comment-list-image">
        <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
      </div>
      <div class="comment-list-body">
        <h3>张欢</h3>
        <p>张欢的评论张欢的评论张欢的评论</p>
        <div class="comment-list-body-content">
          <p><span>韩雪小姐姐:</span>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
          <p><span>吴彦祖小哥:</span>哇,你就是西邮吴彦祖啊,久仰大名!!!</p>
          <p><span>共99条回复&nbsp;></span></p>
        </div>
        <div class="comment-list-time">
          <span>7-28&nbsp;23:36</span>
          <div class="comment-list-icon">
            <span class="mui-icon-mr mui-icon-redo"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-comment"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-like">176</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-list">
      <div class="comment-list-image">
        <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
      </div>
      <div class="comment-list-body">
        <h3>张欢</h3>
        <p>张欢的评论张欢的评论张欢的评论</p>
        <div class="comment-list-body-content">
          <p><span>韩雪小姐姐:</span>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
          <p><span>吴彦祖小哥:</span>哇,你就是西邮吴彦祖啊,久仰大名!!!</p>
          <p><span>共99条回复&nbsp;></span></p>
        </div>
        <div class="comment-list-time">
          <span>7-28&nbsp;23:36</span>
          <div class="comment-list-icon">
            <span class="mui-icon-mr mui-icon-redo"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-comment"></span>
            <span class="mui-icon-extra-mr mui-icon-extra-like">176</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import '../../../static/mui/css/mui.css'
// import '../../../static/mui/css/icons-extra.css'
export default {

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
      }
      p {
        font-size: 15px;
        color: #000;
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
    padding-bottom: 5px;
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
</style>


