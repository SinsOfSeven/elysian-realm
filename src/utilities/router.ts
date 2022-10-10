import { createRouter, createWebHistory } from "vue-router";
const Index = () => "@/Pages/Valkyries/Index.vue";
const About = () => "@/Pages/About.vue";
const Credits = () => "@/Pages/Credits.vue";
const SubmitBuild = () => "@/Pages/SubmitBuild.vue";
const CheckBuild = () => "@/Pages/CheckBuild.vue";
const Login = () => "@/Pages/Auth/Login.vue";
const Details = () => "@/Pages/Valkyries/Details.vue";
const Admin = () => "@/Pages/Admin/Index.vue";
const AddValkyrie = () => "@/Pages/Admin/Valkyrie/Create.vue";
const EditValkyrie = () => "@/Pages/Admin/Valkyrie/Update.vue";
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