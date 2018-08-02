import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import before_login from '@/components/login/before_login.vue'
import login from '@/components/login/login.vue'
import register from '@/components/login/register.vue'
import publish from '@/components/publish/publish.vue'
=======
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabber/HomeContainer.vue'
import TextbodyContainer from '@/components/content/textbody.vue'
import Comment from '@/components/subcomponent/comment.vue'
import CommentInfo from '@/components/content/commentinfo.vue'
>>>>>>> huan.zhang
=======
import notify from '@/components/notify/notify.vue'
>>>>>>> airuo.ruan
=======
import search from '@/components/search/search.vue'
import bill from '@/components/search/bill.vue'
import searchpage from '@/components/search/searchpage.vue'
>>>>>>> ke.wang
=======
import Follow from '@/components/personal/follow.vue'
import Personal from '@/components/personal/personal.vue'
import Fans from '@/components/personal/fans.vue'
import Data from '@/components/personal/data.vue'
>>>>>>> xin.Hu

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      path: '/before_login',
      name: 'before_login',
      component: before_login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
=======
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/home/content',
      name: 'TextbodyContainer',
      component: TextbodyContainer
    },
    {
      path: '/home/content/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/home/content/commentinfo',
      name: 'commentinfo',
      component: CommentInfo
>>>>>>> huan.zhang
=======
      path: '/notify',
      name: 'notify',
      component: notify
>>>>>>> airuo.ruan
=======
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
>>>>>>> ke.wang
=======
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path:'/fans',
      name:'fans',
      component:Fans
    },
    {
      path:'/data',
      name:'data',
      component:Data
>>>>>>> xin.Hu
    }

  ]
})
