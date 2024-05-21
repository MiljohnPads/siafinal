import { createRouter, createWebHistory } from 'vue-router';
import Personal from '../views/Personal.vue';
import Educational from '../views/Educational.vue';
import Work from '../views/Work.vue';
import Portfolio from '../views/Portfolio.vue';
import CsvReader from '../views/CsvReader.vue';
import QrCodeReader from '../views/QrCodeReader.vue';
import QrCodeGenerator from '../views/QrCodeGenerator.vue';
import UserList from '../views/UserList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Personal
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  },
  {
    path: '/education',
    name: 'education',
    component: Educational
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/csvreader',
    name: 'csvreader',
    component: CsvReader
  },
  {
    path: '/qrcodereader',
    name: 'qrcodereader',
    component: QrCodeReader
  },
  {
    path: '/qrcodegenerator',
    name: 'qrcodegenerator',
    component: QrCodeGenerator
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
