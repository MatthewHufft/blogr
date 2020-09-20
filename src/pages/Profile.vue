<template>
  <div class="container-fluid">
    <div class="row d-flex">
      <div class="col-3 mt-2">
        <img class="rounded" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
      </div>
      <div class="col">
        <h1>Welcome {{ profile.name }}</h1>
      </div>
    </div>
    <div class="row">
      <BlogPostComponent v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
    </div>
  </div>
</template>

<script>
import BlogPostComponent from '../components/BlogPostComponent.vue'
export default {
  name: "Profile",
  mounted(){
    this.$store.dispatch("getUserBlogPosts")
    this.$store.dispatch("getProfile")

  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs(){
      return this.$store.state.blogs
    }
  },

  components: {
    BlogPostComponent
  }
};

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
