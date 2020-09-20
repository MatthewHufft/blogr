<template>
  <div class="home container-fluid">
    <div class="row mb-3">
    </div>
    <div class="row">
      <BlogPostComponent v-for="blog in blogs" :key="blog.id" :blogProp="blog" />

    </div>

  </div>
</template>

<script>
import BlogPostComponent from "../components/BlogPostComponent.vue"
export default {
  name: "home",
  props: ["blogProp"],
   mounted() {
    this.$store.dispatch("getAllBlogPosts");
  },
  data(){
    return {
      newBlog: {},
    };
  },
  computed: {
    blogs(){
      return this.$store.state.blogs
    }
  },
  methods: {
    createBlogPost(){
      this.$store.dispatch("createBlogPost", this.newBlog)
    }
  },
  components: {
    BlogPostComponent,
    }
};
</script>
