import { RouteRecordRaw } from "vue-router";
import PendingView from "@/components/PendingView.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/pending',
      name: 'pending',
      component: PendingView,
    },
  ];

  export default routes;