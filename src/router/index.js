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
      import(/* webpackChunkName: "machines" */ "../views/Machines.vue")
  },
  {
    path: "/machine/new",
    name: "machineNew",
    component: () =>
      import(/* webpackChunkName: "machine" */ "../views/MachineNew.vue")
  },
  {
    path: "/machine/:id",
    name: "machineEdit",
    component: () =>
      import(/* webpackChunkName: "machine" */ "../views/MachineEdit.vue")
  },
  {
    path: "/statuses",
    name: "statuses",
    component: () =>
      import(/* webpackChunkName: "status" */ "../views/Statuses.vue")
  },
  {
    path: "/status/new",
    name: "statusNew",
    component: () =>
      import(/* webpackChunkName: "status" */ "../views/StatusNew.vue")
  },
  {
    path: "/status/:id",
    name: "statusEdit",
    component: () =>
      import(/* webpackChunkName: "status" */ "../views/StatusEdit.vue")
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
