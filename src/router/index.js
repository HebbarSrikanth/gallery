import { createRouter, createWebHistory } from "vue-router";
import AuthHandler from "../views/AuthHandler";
import Upload from "../views/Upload";
import Gallery from "../views/Gallery";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Gallery,
  },
  {
    path: "/oauth2/callback",
    name: "Authentication",
    component: AuthHandler,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
