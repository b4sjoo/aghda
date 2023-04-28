import { createRouter, createWebHistory } from 'vue-router'
import appRoutes from '@/app.routes';
import aboutRoutes from '@/about/about.routes';
import authRoutes from '@/auth/auth.routes';

const router = createRouter({
  history: createWebHistory(process.env.base_url),
  routes: [...appRoutes, ...aboutRoutes, ...authRoutes]
})

export default router
