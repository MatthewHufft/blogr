<template>
  <div class="post-details container-fluid text-center">
    <div class="row" v-if="blog.id"> 
      <div class="col-12">
        <h1>{{blog.title}}</h1>
        <img :src="blog.imgUrl" class="w-50 shadow-lg rounded mt-5" alt />
        <p>{{blog.body}}</p>
        <p>Created By: {{blog.creatorEmail}}</p>
        <form class="form-inline" @submit.prevent="createComment" >
          <input
            type="text"
            class="form-control"
            placeholder="Comment...."
            aria-describedby="helpId"
            v-model="newComment.body"
          />
          <button type="submit" class="btn btn-warning">Send</button>
        </form>
      </div>
      <div class="row comments">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-post-details",
  props: [""],
  mounted(){
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId)
  },
  data(){
    return {
      newComment: {},
    };
  },
  computed: {
    blog(){
      return this.$store.state.activeBlog
    },
    comments(){
      return this.$store.state.comments
    },
    isCreator(){
      return this.$store.state.profile.email == this.blog.creatorEmail;
    }
  },
  methods: {
    createComment(){
      this.$store.dispatch('createComment', newComment)
    }
  },
  components: {}
}
</script>

<style>

</style>