// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'
import DetailPage from  './pages/detail.vue'
import A from './pages/detail/A.vue'
import B from './pages/detail/B.vue'
import C from './pages/detail/C.vue'
import D from './pages/detail/D.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path: '/',
			component:IndexPage
		},
    {
      path: '/detail',
      redirect:'/detail/B/1',
      component:DetailPage,
      children:[
        // {
        //   path: 'A',
        //   component:A
        // },
        {
          path: 'B/:id',
          component:B
        }
        // {
        //   path: 'C',
        //   component:C
        // },
        // {
        //   path: 'D',
        //   component:D
        // }
      ]
    }
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
