import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ChannelPage from '@/pages/ChannelPage.vue';
import ChannelFormPage from '@/pages/ChannelFormPage.vue';
import ChannelEditPage from '@/pages/ChannelEditPage.vue'; // новая страница для редактирования

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
  },
  {
    path: '/channels/edit/:id',
    component: ChannelEditPage,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;
