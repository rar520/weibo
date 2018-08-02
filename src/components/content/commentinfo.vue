<template>
  <div class="commentinfo-container">
    <!-- 头部header区域 -->
    <mt-header title="99条回复" fixed>
      <router-link to="/home/content" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 头部header区域 -->
    <!-- 评论回复详情 -->
    <div class="commentself">
      <div class="commentself-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="commentself-user">
        <h3>张欢</h3>
        <span>7-28&nbsp;23:36</span>
      </div>
      <div class="commentself-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like">176</span>&nbsp;
        <span class="mui-icon-extra-mr mui-icon-extra-comment"></span>
      </div>
    </div>
    <div class="commentself-content">
      <p><span>张欢</span>:张欢的评论张欢的评论张欢的评论</p>
      <router-link to="/home/content" tag="a">查看原微博</router-link>
    </div>
    <!-- 评论回复详情 -->
    <!-- 评论的评论列表区域 -->
    <div class="comment-commentlist">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>韩雪小姐姐</h3>
        <span>8-2&nbsp;21:02</span>
        <p>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like"></span>
      </div>
    </div>
    <div class="comment-commentlist">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>韩雪小姐姐</h3>
        <span>8-2&nbsp;21:02</span>
        <p>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like"></span>
      </div>
    </div>
    <div class="comment-commentlist">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>韩雪小姐姐</h3>
        <span>8-2&nbsp;21:02</span>
        <p>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like"></span>
      </div>
    </div>
    <div class="comment-commentlist">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>韩雪小姐姐</h3>
        <span>8-2&nbsp;21:02</span>
        <p>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like"></span>
      </div>
    </div>
    <div class="comment-commentlist">
      <div class="comment-commentlist-image">
        <img src="../../../static/img/touxiang1.jpg" alt="评论者">
      </div>
      <div class="comment-commentlist-user">
        <h3>韩雪小姐姐</h3>
        <span>8-2&nbsp;21:02</span>
        <p>没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈没有见过如此俊俏的小哥哥哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="comment-commentlist-icon">
        <span class="mui-icon-extra-mr mui-icon-extra-like"></span>
      </div>
    </div>
    <!-- 评论的评论列表区域 -->
    <!-- 底部回复评论 -->
      <div class="footer-wrap">
        <input placeholder="回复评论" type="text">
      </div>
    <!-- 底部回复评论 -->
  </div>
</template>
<script>
export default {

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
      width: 63%;
      h3 {
        font-size:16px;
        font-weight: bold;
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
      }
      span {
        font-size:14px;
        color: #929292;
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
  input {
    border-radius: 10px;
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
</style>



