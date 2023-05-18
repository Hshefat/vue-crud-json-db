import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin.vue'),
    children: [
      {
        path: 'products',
        name: 'Products-Page',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'products/create',
        name: 'Create-Products',
        component: () => import('../views/admin/CreateProducts.vue'),
      },
      {
        path: 'products/:id/edit',
        name: 'Edit-Products',
        component: () => import('../views/admin/EditProducts.vue'),
        props: true 
      },
    
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
