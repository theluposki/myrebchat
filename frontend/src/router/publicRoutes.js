export const publicRoutes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "public",
    component: () => import("../views/Access/Public.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/Access/Home.vue"),
      },
      {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("../views/Access/SignIn.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () => import("../views/Access/SignUp.vue"),
      },
    ]
  }
]