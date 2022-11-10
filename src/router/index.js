import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Example Routes
  {
    path: '/example',
    component: () => import('../views/layout/ExampleLayout.vue'),
    children: [
      {
        path: '1',
        name: 'example-1',
        component: () => import('../views/example/Example-1.vue'),
      }
    ]
  },
  // Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
