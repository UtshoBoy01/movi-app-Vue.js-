import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Home from "@/views/Home.vue";
import MoviDetail from "@/views/MoviDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie-detail",
      component: MoviDetail,
    },
  ],
});

export default router;
