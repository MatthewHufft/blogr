<template>
  <div class="home container-fluid">
    <div class="row" id="banner">
      <div class="col-6 offset-4 text-light d-flex flex-column justify-content-center text-shadow">
        <h1>Your next experience is waiting...</h1>
      </div>
    </div>
    <div class="row bg-img">
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

<style scoped>
#banner{
  height: 25rem;
  background-image: url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
  background-size: cover;
  background-position: center;
}

.text-shadow{
  color: white;
  text-shadow: 2px 2px 2px #000000;
}

.bg-img{
  background-image: linear-gradient( 109.6deg,  rgba(0,0,0,0.93) 11.2%, rgba(63,61,61,1) 78.9% );

}
</style>
