<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostListComponent :posts="posts"/>
    </div>
    <div v-else>Loading</div>

  </div>
  
</template>

<script >
// @ is an alias to /src
import PostListComponent from '../components/PostList.component.vue'
import getPosts from '../composables/getPosts'

export default {
    name: "HomeView",
    components: { PostListComponent },
    setup() {
      const { posts, error, load } = getPosts()
      load()
      return { posts, error }
    },
} 
</script>
