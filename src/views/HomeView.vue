<template>
  <div class="home">
    <h1>Home</h1>
    <PostListComponent v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
  
</template>

<script>
// @ is an alias to /src

import { computed, reactive, ref, watch, watchEffect } from 'vue'
import PostListComponent from '../components/PostList.component.vue'


export default {
    name: "HomeView",
    components: { PostListComponent },
    setup() {
        const posts = ref([
            { title: "Welcome to the blog", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure optio, consequatur cupiditate aperiam iste voluptatum incidunt, ducimus maxime veniam voluptates tempora nulla, dolor doloribus similique laborum velit fuga error?", id: 1 },
            { title: "Top 5 css", body: "lorem ipsum", id: 2 }
        ]);
        const showPosts = ref(true)
        return { posts, showPosts }
    },
}
</script>
