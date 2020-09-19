<template>
  <div class="col-12">
    <div class="card">
      <i class="fa fa-trash-o text-danger align-self-end pt-1 pr-2 pointer" aria-hidden="true" @click="deletePost" v-if="this.isCreator == this.commentProp.creatorEmail" ></i>
      <div class="card-body">
        <p class="card-text">{{commentProp.body}}</p>
        <sub>From: {{commentProp.creatorEmail}}</sub>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["commentProp"],
  mounted(){

  },
  data(){
    return {};
  },
  computed: {
    isCreator(){
      return this.$auth.userInfo.email
    },
    comments(){
      return this.$store.state.comments
    }

  },
  methods: {
    deletePost(){
      this.$store.dispatch("deleteComment", this.commentProp.id)
    }
  },
  components: {}
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
  font-size: 1.3em;
}
.grow:hover{

}
</style>