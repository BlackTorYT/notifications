import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ChannelPage from '@/pages/ChannelPage.vue';
import ChannelFormPage from '@/pages/ChannelFormPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/channels',
    component: ChannelPage
  },
  {
    path: '/channels/create',
    component: ChannelFormPage,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;
