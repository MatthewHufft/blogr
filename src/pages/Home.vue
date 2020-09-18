<template>
  <div class="home container-fluid">
    <div class="row mb-3">
      <div class="col mt-3">
        <h3>Create a Post</h3>
        <form class="form-inline" @submit.prevent="createBlogPost">
          <div class="form-group">
            <input
              type="text"
              v-model="newBlog.title"
              class="form-control"
              placeholder="Title"
              aria-describedby="helpId"
            />
            <input
              type="text"
              class="form-control"
              v-model="newBlog.imgUrl"
              placeholder="Img Url"
              aria-describedby="helpId"
            />
            <input
              type="text"
              class="form-control"
              v-model="newBlog.body"
              placeholder="body "
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
      </div>
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
