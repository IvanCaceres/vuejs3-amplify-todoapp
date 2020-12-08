import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/panel",
    name: "Panel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("@/views/Panel.vue"),
    children: [
      {
        path: 'todos',
        component: () => import("@/views/Todos.vue"),
        children: [
          {
            path: '',
            component: () => import("@/components/ListTodoLists.vue")
          },
          {
            path: 'create',
            component: () => import("@/components/CreateTodoList.vue")
          }
        ]
      },
      {
        path: 'calendar',
        component: () => import("@/views/CalendarView.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
