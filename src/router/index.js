import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Account from "../views/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    // {
    //   path: '/account',
    //   component: Account
    // },
  ],
});

export default router;