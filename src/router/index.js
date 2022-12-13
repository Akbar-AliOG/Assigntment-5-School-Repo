import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PurchaseView from "../views/PurchaseView.vue";
<<<<<<< HEAD
import testView from "../views/testView.vue";
=======
>>>>>>> b63a16896ba5165645881778203183b901c621ff
// import Account from "../views/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
<<<<<<< HEAD

    { 
      path: '/login',
      component: LoginView
    },
    { 
      path: '/purchase',
      component: PurchaseView
    },
    { 
      path: '/test',
      component: testView
    },


=======
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/purchase',
      component: PurchaseView
    },
>>>>>>> b63a16896ba5165645881778203183b901c621ff
    // {
    //   path: '/account',
    //   component: Account
    // },
  ],
});

export default router;