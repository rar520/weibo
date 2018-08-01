import Vue from 'vue'
import Router from 'vue-router'
import before_login from '@/components/login/before_login.vue'
import login from '@/components/login/login.vue'
import register from '@/components/login/register.vue'
import publish from '@/components/publish/publish.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }

  ]
})
