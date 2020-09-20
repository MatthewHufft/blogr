<template>
  <div class="col-12">
    <div class="card">
      <i class="fa fa-trash-o text-danger align-self-end pt-1 pr-2 pointer grow" aria-hidden="true" @click="deleteComment" v-if="this.isCreator == this.commentProp.creatorEmail" ></i>
      <div class="card-body">
        <p class="card-text">{{commentProp.body}}
          <i
            class="fa fa-pencil text-warning grow shadow pointer"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="isCreator">
            </i></p>
            <form class="form-inline" @submit.prevent="editComment" v-if="editToggle">
              <input
                type="text"
                class="form-control"
                aria-describedby="helpId"
                v-model="commentData.body"
              />
              <button type="submit" class="btn btn-warning"><i class="fa fa-arrow-circle-right big-icon" aria-hidden="true"></i></button>
          </form>
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
    return {
      commentData: {}, 
      editToggle: false
    };
  },
  computed: {
    isCreator(){
      return this.$auth.userInfo.email == this.commentProp.creatorEmail
    },
    comments(){
      return this.$store.state.comments
    }

  },
  methods: {
    deleteComment(){
      this.$store.dispatch("deleteComment", this.commentProp.id)
    },
    editComment(){
      this.commentData.id = this.commentProp.id
      this.$store.dispatch("setActiveComment", this.commentProp)
      this.$store.dispatch("editComment", this.commentData)
      
    }
  },
  components: {}
}
</script>

<style>
.pointer{
  cursor: pointer;
}

.big-icon {
  font-size: 1.3em;
}
.grow { transition: all .2s ease-in-out; }
  .grow:hover { transform: scale(1.1); }

</style>