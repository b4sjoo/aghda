import { RouteRecordRaw } from "vue-router";
import AuthLogin from "@/components/auth-login.vue";
import AuthSignup from "@/components/auth-signup.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/login',
      name: 'login',
      component: AuthLogin,
      props: true,
    },
    {
      path: '/signup',
      name: 'signup',
      component: AuthSignup,
      props: true,
    },
  ];

  export default routes;