import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FAQ from "../views/FAQ.vue";
import SignUp from "../views/SignUp.vue";
import Data from "../views/Data.vue";
import ThankYou from "../views/ThankYou.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "FAQ",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FAQ,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/thankyou",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
