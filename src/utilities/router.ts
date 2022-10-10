import { createRouter, createWebHistory } from "vue-router";
import Index from "@/Pages/Valkyries/Index.vue";
import About from "@/Pages/About.vue";
import Credits from "@/Pages/Credits.vue";
import SubmitBuild from "@/Pages/SubmitBuild.vue";
import CheckBuild from "@/Pages/CheckBuild.vue";
import Login from "@/Pages/Auth/Login.vue";
import Details from "@/Pages/Valkyries/Details.vue";
import Admin from "@/Pages/Admin/Index.vue";
import AddValkyrie from "@/Pages/Admin/Valkyrie/Create.vue";
import EditValkyrie from "@/Pages/Admin/Valkyrie/Update.vue";
import { auth } from "@/utilities/auth";

const routes = [
  { path: "/", name:"valkyries.index", component: Index },
  { path: "/about", name:"about", component: About },
  { path: "/credits", name: "credits", component: Credits },
  { path: "/submit-build", name: "submit.build", component: SubmitBuild },
  { path: "/check-build/:id?", name: "check.build", component: CheckBuild },
  { path: "/login", name: "login", component: Login },
  { path: "/valkyries/:name", name: "valkyries.details", component: Details },
  { path: "/admin", name: "admin", component: Admin },
  { path: "/admin/valkyries/create", name: "admin.valkyries.create", component: AddValkyrie },
  { path: "/admin/valkyries/:name", name: "admin.valkyries.edit", component: EditValkyrie },
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