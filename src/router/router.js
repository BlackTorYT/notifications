import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ChannelPage from '@/pages/ChannelPage.vue';
import ChannelFormPage from '@/pages/ChannelFormPage.vue';
import ChannelEditPage from '@/pages/ChannelEditPage.vue'; 
import SubscriberPage from '@/pages/SubscriberPage.vue';
import SubscriberFormPage from '@/pages/SubscriberFormPage.vue';
import SubscriberEditPage from '@/pages/SubscriberEditPage.vue';
import SubPage from '@/pages/SubPage.vue';
import SubFormPage from '@/pages/SubFormPage.vue';
import SubEditPage from '@/pages/SubEditPage.vue';

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
  },
  {
    path: '/subs',
    component: SubPage
  },
  {
    path: '/subs/create',
    component: SubFormPage,
    props: true
  },
  {
    path: '/subs/edit/:id',
    component: SubEditPage,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;
