import { RouteRecordRaw } from "vue-router";
import MonitorView from "@/components/MonitorView.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/monitor',
      name: 'monitor',
      component: MonitorView,
    },
  ];

  export default routes;