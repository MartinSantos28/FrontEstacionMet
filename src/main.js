import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import store from './store'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(Router)

import Login from './pages/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login, // Use the Login component directly instead of a dynamic import
  },
  {
    path: '/',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'home', // Remove the leading slash to make the path relative
        name: 'home',
        meta: {
          auth: true,
        },
        component: () => import('../src/pages/Home'), // Correct the path for the dynamic import
      },
    ],
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated before proceeding to the route
    if (store.state.auth) {
      next({name : 'home'}); // Proceed to the route
    } else {
      next({ name: 'login' }); // Redirect to the login route if not authenticated
    }
  } else {
    next(); // Proceed to the route (no authentication required)
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
