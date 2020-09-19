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
    deleteBlogPost(state, blogId){
      state.blogs = state.blogs.filter(b => b.id != blogId)
    },
    deleteComment(state, commentId){
      state.comments = state.comments.filter(c => c.id != commentId)
    }
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
    async getActiveBlog({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        commit("setActiveBlog", res.data)
        commit("setComments", res.data.comments)
      } catch (error) {
        console.error();
      }
    },
    async getComments({ commit }, blogId){
      try {
        let res = await api.get("blogs/" + blogId + "/comments")
        commit("setComments", res.data)
      } catch (error) {
        console.error(error);
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
    async createComment({ commit }, newComment){
      try {
        let res = await api.post("comments", newComment)
        commit("setComments", [...this.state.comments, res.data])
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlogPost({ commit }, blogId){
      try {
        let res = await api.delete("blogs/" + blogId)
        commit("deleteBlogPost", blogId)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({ commit }, commentId){
      try {
        let res = await api.delete("comments/"+ commentId)
        commit("deleteComment", commentId)
      } catch (error) {
        console.error(error);
      }
    }

  },
});
