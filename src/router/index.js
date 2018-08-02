import Vue from 'vue'
import Router from 'vue-router'
import Follow from '@/components/personal/follow.vue'
import Personal from '@/components/personal/personal.vue'
import Fans from '@/components/personal/fans.vue'
import Data from '@/components/personal/data.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
