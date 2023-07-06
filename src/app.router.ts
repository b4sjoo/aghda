import { createRouter, createWebHistory } from 'vue-router'
import appRoutes from '@/app.routes';
import aboutRoutes from '@/about/about.routes';
import authRoutes from '@/auth/auth.routes';
import countdownRoutes from '@/countdown/countdown.routes';
import contactRoutes from '@/contact/contact.routes';
import pendingRoutes from '@/pending/pending.routes';
import monitorRoutes from '@/monitor/monitor.routes';

const router = createRouter({
  history: createWebHistory(process.env.base_url),
  routes: [...appRoutes, ...aboutRoutes, 
    ...authRoutes, ...countdownRoutes, 
    ...contactRoutes, ...pendingRoutes,
    ...monitorRoutes]
})

export default router
