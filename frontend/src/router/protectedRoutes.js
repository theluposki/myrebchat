export const protectedRoutes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/HomeView.vue"),
    children: [
      {
        path: "",
        name: "feed",
        component: () => import("../views/Home/FeedView.vue"),
      },
      {
        path: "chats",
        name: "chats",
        component: () => import("../views/Home/chats/ChatsView.vue"),
      },
      {
        path: "config",
        name: "config",
        component: () => import("../views/Home/ConfigView.vue"),
      },
    ],
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/Home/chats/ChatView.vue"),
  },
  {
    path: "/add-friend",
    name: "add-friend",
    component: () => import("../views/Home/chats/addFriend.vue"),
  },
  {
    path: "/request-friend",
    name: "request-friend",
    component: () => import("../views/Home/chats/request-friend.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
]
