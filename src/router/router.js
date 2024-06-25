import MainPage from "@/pages/MainPage.vue"
import {createRouter, createWebHistory} from "vue-router";
import ChannelPage from "@/pages/ChannelPage.vue"

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/channels',
    component: ChannelPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;