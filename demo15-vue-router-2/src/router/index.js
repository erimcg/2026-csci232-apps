import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Messages from '@/components/Messages.vue'
import Profile from '@/components/Profile.vue'
import ShopSearch from '@/components/shop/ShopSearch.vue'
import ShoppingCart from '@/components/shop/ShoppingCart.vue'
import ShopItem from '@/components/shop/ShopItem.vue'
import NotFoundView from '@/components/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { 
      path: '/home', 
      component: Home,
      children: [
        { path: '', component: Messages },
        { path: 'messages', component: Messages },
        { path: '/profile', component: Profile },
      ]
    },
    {
      path: '/shop',
      children: [
        { 
          path: 'search', 
          component: ShopSearch,
          children: [
            { path: 'item/:id', component: ShopItem }
          ]
        },
        { path: 'search/item', component: ShopSearch },
        { path: 'cart', component: ShoppingCart }
      ]
    },
    { path: '/:pathMatch(.*)*', component: NotFoundView }
  ],
})

export default router
