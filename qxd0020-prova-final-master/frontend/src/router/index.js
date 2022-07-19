import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import PageNotFound from "../components/PageNotFound.vue";

// import Signup from "../views/Signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    // {
    //  path: "*",
    //  component: PageNotFound   
    // }

    // {
    //   path: "/signup",
    //   name: "signup",
    //   component: Signup,
    // },
  ],
});

export default router;