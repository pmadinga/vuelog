<template>
  <div class="post-list">
    <div v-for="(post, index) in posts" :key="post.id">
      <SinglePostComponent :post="post"/>
      
    </div>
  </div>
</template>
<script>
import { onMounted, onUpdated } from 'vue';
import SinglePostComponent from './SinglePost.component.vue';
  export default{
    props: ["posts"],
    components: { SinglePostComponent },
    setup(props) {
      onMounted(() => console.log('mounted'))
      onUpdated(() => console.log('updated'))
    },
}
</script>

<style>


</style>