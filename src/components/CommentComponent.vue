<template>
  <div class="col-12">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Author: {{comment.creatorEmail}} </h4>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  mounted(){

  },
  data(){
    return {};
  },
  computed: {
    comment
  },
  methods: {},
  components: {}
}
</script>

<style>

</style>