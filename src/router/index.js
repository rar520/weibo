import Vue from 'vue'
import Router from 'vue-router'
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
    }

  ]
})
