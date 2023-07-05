import { RouteRecordRaw } from "vue-router";
import ContactView from "@/components/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ];

  export default routes;