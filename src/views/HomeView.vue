<template>
  <div class="home">
    <div class="err_message" v-if="error">
      {{ error }}
    </div>
    <div class='flex__wrapper' v-if="posts.length"> 
      <PostList 
      :posts="posts"
      />
      <TagCloud
      :posts="posts" 
      />

    </div>
    <div v-else>
      <Spinner />
    </div>

  </div>
</template>


<script>
import TagCloud from '../components/TagCloud.vue';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';


import getPosts from '../composables/getPosts';


export default {
    name: 'HomeView',
    components:{ PostList, Spinner, TagCloud },
    setup(){

        const { posts, error, load } = getPosts()
        
        load()


        return { posts, error }
    }
}
</script>
