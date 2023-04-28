import { RouteRecordRaw } from "vue-router";
import AboutView from "@/components/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ];

  export default routes;