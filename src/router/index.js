import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import AddProductView from '@/views/AddProductView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/produtos', component: ProductsView },
  { path: '/produto/:id', component: ProductDetailsView },
  { path: '/cadastrar', name: 'cadastrar', component: AddProductView },
  { path: '/sobre', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
