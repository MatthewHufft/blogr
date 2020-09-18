<template>
  <div class="col-3 m-1">
    <router-link :to="{name: 'blog-post-details', params: {blogId: blogProp.id}}">
    <div class="card">
      <img class="card-img-top" :src="blogProp.imgUrl">
      <div class="card-body">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p>Created by: {{blogProp.creatorEmail}} </p>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["blogProp"],
  data(){
    return {};
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style scoped>

</style>