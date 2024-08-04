import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("../views/Recipes/RecipeSearch.vue"),
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: () => import("../views/Recipes/RecepieDetails.vue"),
    },
    {
      path: "/recipe-upload",
      name: "recipe-upload",
      component: () => import("../views/Recipes/RecipeUpload.vue"),
    },
  ],
});

export default router;
