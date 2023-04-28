import { RouteRecordRaw } from 'vue-router';
import HomeView from '@/components/HomeView.vue'

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
];

/**
 * 默认导出
 */
export default routes;