import { createRouter, createWebHistory } from "vue-router";

import { protectedRoutes } from "./protectedRoutes.js";
import { publicRoutes } from "./publicRoutes.js";

const user = localStorage.getItem('USER');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: user ? protectedRoutes : publicRoutes
});

export default router;
