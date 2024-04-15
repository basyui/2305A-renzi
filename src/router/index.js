import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import layout from "@/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login" // 默认跳转
  },

  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue")
      },
      {
        path: "/staff",
        name: "astaff",
        component: () => import("../views/staff.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
