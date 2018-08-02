import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search.vue'
import bill from '@/components/search/bill.vue'
import searchpage from '@/components/search/searchpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
