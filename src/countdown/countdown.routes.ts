import { RouteRecordRaw } from "vue-router";
import CountdownView from "@/components/CountdownView.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/countdown',
      name: 'countdown',
      component: CountdownView,
    },
  ];

  export default routes;