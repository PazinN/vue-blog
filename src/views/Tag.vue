<template>
    <div class="tag">
    <div class="err_message" v-if="error">
      {{ error }}
    </div>
    <div class='flex__wrapper' v-if="posts.length"> 
      <PostList 
      :posts="getTag"
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
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";

import getPosts from "../composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { PostList, TagCloud, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const getTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return {
      posts,
      error,
      getTag,
    };
  },
};
</script>

