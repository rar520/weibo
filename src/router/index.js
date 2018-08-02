import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabber/HomeContainer.vue'
import TextbodyContainer from '@/components/content/textbody.vue'
import Comment from '@/components/subcomponent/comment.vue'
import CommentInfo from '@/components/content/commentinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
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
    }
  ]
})
