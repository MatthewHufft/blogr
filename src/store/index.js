import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogPosts(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    },
    setComments(state, comments){
      state.comments= comments
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogPosts({ commit }) {
      try {
        let res = await api.get("blogs");
        commit("setBlogPosts", res.data)
      } catch (error) {
        console.error();
      }
    },
    async createBlogPost({ commit }, newBlog) {
      try {
        let res = await api.post("blogs", newBlog)
        commit("setBlogPosts", [...this.state.blogs, res.data])
      } catch (error) {
        console.error();
      }
    },
    async getActiveBlog({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        console.log(res.data)
        commit("setActiveBlog", res.data)
        commit("setComments", res.data.comments)
      } catch (error) {
        console.error();
      }
    },
    async createComment({ commit }, newComment){
      try {
        let res = await api.post("comments", newComment)
      } catch (error) {
        console.error(error);
      }
    }

  },
});
