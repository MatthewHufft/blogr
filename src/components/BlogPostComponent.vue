<template>
  <div class="col-3 d-flex flex-column">
    <router-link :to="{name: 'blog-post-details', params: {blogId: blogProp.id}}">
    <div class="card mt-3 bg-grad">
      
      <img class="card-img-top" :src="blogProp.imgUrl">
      <div class="card-body">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p>Created by: {{blogProp.creatorEmail}} </p>
      </div>
    </div>
    </router-link>
    <button class="btn btn-danger " @click="deletePost" v-if="this.isCreator == this.blogProp.creatorEmail"><i class="fa fa-trash" aria-hidden="true" ></i></button>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["blogProp"],
  data(){
    return {};
  },
  computed: {
    isCreator(){
      return this.$auth.userInfo.email
    }
  },
  methods: {
    deletePost(){
      this.$store.dispatch("deleteBlogPost", this.blogProp.id)
    }
  },
  components: {}
}
</script>

<style scoped>
  .bg-grad{
    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  }
</style>