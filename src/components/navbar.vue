<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-trans">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img
          src="../assets/drinks.png"
          width="40px;"
        />
      </div>
      <div class="d-flex align-items-center text-light mt-3">
        <h3 style="font-family: 'Satisfy', cursive;">Cheers</h3>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"><button class="btn btn-dark nav-link text-light">Home</button></router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
          >
          <router-link class="nav-link" :to="{ name: 'Profile' }"><button class="btn btn-dark nav-link text-light">Profile</button></router-link>
        </li>
        <li class="nav-item mt-2">
          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle nav-link text-light" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              New Post
            </button>
            <div class="dropdown-menu post-form px-2" aria-labelledby="dropdownMenu2">
              <form id="newPostForm" class="form" @submit.prevent="createBlogPost">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="newBlog.title"
                    class="form-control mb-1"
                    placeholder="Title"
                    aria-describedby="helpId"
                  />
                  <input
                    type="text"
                    class="form-control mb-1"
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
                <button type="submit" class="btn btn-success mr-3">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  data(){
    return {
      newBlog: {},
    };
  },

  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
        // NOTE if you want to do something everytime the user logs in, do so here
      }
    },

    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },

    createBlogPost(){
      this.$store.dispatch("createBlogPost", this.newBlog)
    }
  },
};
</script>

<style scoped>
.post-form{
  min-width: 15rem;
}
.bg-trans{
  background-image: linear-gradient( 109.6deg,  rgba(0,0,0,0.93) 11.2%, rgba(63,61,61,1) 78.9% );
}
</style>
