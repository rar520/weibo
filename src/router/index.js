import Vue from 'vue'
import Router from 'vue-router'
import notify from '@/components/notify/notify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notify',
      name: 'notify',
      component: notify
    }
  ]
})
