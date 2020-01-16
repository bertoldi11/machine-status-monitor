import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/machines",
    name: "machines",
    component: () =>
      import(/* webpackChunkName: "machine" */ "../views/Machines.vue")
  },
  {
    path: "/status",
    name: "status",
    component: () =>
      import(/* webpackChunkName: "status" */ "../views/Status.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
