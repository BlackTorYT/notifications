import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ChannelPage from '@/pages/ChannelPage.vue';
import ChannelFormPage from '@/pages/ChannelFormPage.vue';
import ChannelEditPage from '@/pages/ChannelEditPage.vue'; 
import SubscriberPage from '@/pages/SubscriberPage.vue';
import SubscriberFormPage from '@/pages/SubscriberFormPage.vue';
import SubscriberEditPage from '@/pages/SubscriberEditPage.vue';

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
  },
  {
    path: '/subscribers',
    component: SubscriberPage
  },
  {
    path: '/subscribers/create',
    component: SubscriberFormPage,
    props: true
  },
  {
    path: '/subscribers/edit/:id',
    component: SubscriberEditPage,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;
