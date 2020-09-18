import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
// @ts-ignore
import BlogPostDetails from "../pages/BlogPostDetails"
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/blogs/:blogId",
    name: "blog-post-details",
    component: BlogPostDetails,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
