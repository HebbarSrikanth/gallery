import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: "",
  },
  {
    path: "/auth/callback",
    name: "Login",
    component: "",
  },
];

const route = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default route;
