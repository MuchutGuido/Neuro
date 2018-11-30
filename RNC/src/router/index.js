import Vue from 'vue'
import Router from 'vue-router'
import HelloNeuro from '@/components/HelloNeuro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloNeuro',
      component: HelloNeuro
    }
  ]
})
