<template>
  <div class="post-details container-fluid text-center">
    <div class="row" v-if="blog.id"> 
      <div class="col-12">
        <h1>{{blog.title}}</h1>
        <img :src="blog.imgUrl" class="w-50 shadow-lg rounded mt-5" alt />
        <p>{{blog.body}} <i
            class="fa fa-pencil text-warning grow shadow pointer"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="isCreator"
          ></i></p>
          <form class="form-inline" @submit.prevent="editPost" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            aria-describedby="helpId"
            v-model="postData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Post</button>
          </form>

        <p>Created By: {{blog.creatorEmail}}</p>
        <form class="form-inline pb-2" @submit.prevent="createComment" >
          <input
            type="text"
            class="form-control"
            placeholder="Comment...."
            aria-describedby="helpId"
            v-model="newComment.body"
          />
          <button type="submit" class="btn btn-warning"><i class="fa fa-arrow-circle-right big-icon" aria-hidden="true"></i></button>
        </form>
      </div>
      <div class="row comments">
        <CommentComponent v-for="comment in comments" :key="comment.id" :commentProp="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue"
export default {
  name: "blog-post-details",
  props: [""],
  mounted(){
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getComments", this.$route.params.blogId)
    this.$store.dispatch("getProfile")
  },
  data(){
    return {
      newComment: {},
      postData: {}, 
      editToggle: false 
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
      return this.$store.state.profile.email === this.blog.creatorEmail
    }
  },
  methods: {
    createComment(){
      let payload = {
        creatorEmail: this.$auth.userInfo.email,
        blog: this.$route.params.blogId,
        body: this.newComment.body
      }
      this.$store.dispatch('createComment', payload)
    },

    editPost(){
      this.postData.id = this.blog.id
      this.$store.dispatch('editPost', this.postData)
    }

  },

  components: {
    CommentComponent
    }
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
  font-size: 1.3em;
}
.grow { transition: all .2s ease-in-out; }
  .grow:hover { transform: scale(1.1); }
</style>