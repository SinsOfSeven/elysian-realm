import { createRouter, createWebHistory } from "vue-router";
import Index from "@/Pages/Valkyries/Index.vue";
import { auth } from "@/utilities/auth";

const routes = [
  { path: "/", name:"valkyries.index", component: Index },
  { path: "/about", name:"about", component: () => import ("@/Pages/About.vue") },
  { path: "/credits", name:"credits", component: () => import("@/Pages/Credits.vue") },
  { path: "/submit-build", name: "submit.build", component: () => import("@/Pages/SubmitBuild.vue") },
  { path: "/check-build/:id?", name: "check.build", component: () => import("@/Pages/CheckBuild.vue") },
  { path: "/login", name: "login", component: () => import("@/Pages/Auth/Login.vue") },
  { path: "/valkyries/:name", name: "valkyries.details", component: () => import ("@/Pages/Valkyries/Details.vue") },
  { path: "/admin", name: "admin", component: () => import("@/Pages/Admin/Index.vue") },
  { path: "/admin/valkyries/create", name: "admin.valkyries.create", component: () => import("@/Pages/Admin/Valkyrie/Create.vue") },
  { path: "/admin/valkyries/:name", name: "admin.valkyries.edit", component: () => import("@/Pages/Admin/Valkyrie/Update.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to, from) => {
  if (to.name?.toString().includes("admin")) {
    if (!auth.user) {
      return { name: "login" };
    }
  }
  return true;
});

export default router