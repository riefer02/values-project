import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import Survey from "../views/Survey.vue";
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
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
